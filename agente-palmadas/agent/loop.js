require('dotenv').config()
const Anthropic = require('@anthropic-ai/sdk')
const { executeAction } = require('./actions')
const { checkAction, extractPermissionRequest } = require('./permissions')

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SCREEN_WIDTH  = 1280
const SCREEN_HEIGHT = 800
const MAX_ITERATIONS = 25

const SYSTEM_PROMPT = `Eres un agente autónomo de escritorio en Arch Linux con Hyprland.
Completa las tareas del usuario de forma completamente autónoma.

━━ HAZ ESTO SIN PEDIR CONFIRMACIÓN ━━
- Abrir o cerrar cualquier aplicación
- Navegar por webs y hacer búsquedas
- Escribir texto en formularios, documentos, editores, terminales
- Copiar, pegar, seleccionar, mover texto
- Cambiar de pestaña, minimizar, maximizar ventanas
- Crear archivos o carpetas nuevos
- Reproducir música, vídeos, podcasts
- Instalar software con gestor de paquetes
- Cambiar ajustes menores de aplicaciones

━━ ESCRIBE [PEDIR_PERMISO]: <descripción> Y DETENTE ANTES DE ━━
- Eliminar archivos o carpetas (rm, del, mover a papelera)
- Desinstalar software del sistema
- Enviar emails, mensajes, publicar en redes sociales
- Realizar pagos, suscripciones o compras
- Cambiar configuración de red, firewall o seguridad del sistema
- Ejecutar comandos irreversibles (rm -rf, format, dd, shred...)
- Acceder a contraseñas, claves privadas o datos bancarios

Tras cada acción haz screenshot para verificar.
Si algo falla, intenta una alternativa.
Usa atajos de teclado siempre que puedas (más rápido y fiable que hacer clic).`

async function runAgent(userCommand, { onStatus, onConfirmNeeded }) {
  const messages = []

  const firstShot = await global.captureScreen()
  messages.push({
    role: 'user',
    content: [
      { type: 'image', source: { type: 'base64', media_type: 'image/png', data: firstShot } },
      { type: 'text', text: userCommand }
    ]
  })

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    onStatus?.(`Paso ${i + 1}: pensando...`)

    const response = await client.beta.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      tools: [{
        type: 'computer_20251124',
        name: 'computer',
        display_width_px: SCREEN_WIDTH,
        display_height_px: SCREEN_HEIGHT
      }],
      messages,
      betas: ['computer-use-2025-11-24'],
      system: SYSTEM_PROMPT
    })

    messages.push({ role: 'assistant', content: response.content })

    // ¿Claude pide permiso para algo peligroso?
    const permRequest = extractPermissionRequest(response.content)
    if (permRequest) {
      onStatus?.('⏸ Esperando confirmación...')
      const ok = await onConfirmNeeded(permRequest)
      messages.push({
        role: 'user',
        content: ok ? 'Confirmado. Procede.' : 'Denegado. Busca una alternativa o cancela.'
      })
      continue
    }

    // ¿Claude terminó?
    if (response.stop_reason === 'end_turn') {
      const text = response.content.filter(b => b.type === 'text').map(b => b.text).join(' ')
      onStatus?.(`✅ ${text}`)
      return { success: true, message: text }
    }

    // Ejecutar acciones
    let lastToolId = null
    for (const block of response.content) {
      if (block.type !== 'tool_use' || block.name !== 'computer') continue

      const action = block.input
      lastToolId = block.id

      // Chequeo de seguridad en código (segunda capa)
      const { needsConfirm, reason } = checkAction(action)
      if (needsConfirm) {
        const ok = await onConfirmNeeded(reason)
        if (!ok) {
          messages.push({
            role: 'user',
            content: [{ type: 'tool_result', tool_use_id: block.id, content: 'Cancelado por el usuario.' }]
          })
          continue
        }
      }

      onStatus?.(`Ejecutando: ${action.action}`)
      await executeAction(action)
      await sleep(400)
    }

    // Screenshot nuevo como resultado de la herramienta
    if (lastToolId) {
      const shot = await global.captureScreen()
      messages.push({
        role: 'user',
        content: [{
          type: 'tool_result',
          tool_use_id: lastToolId,
          content: [{ type: 'image', source: { type: 'base64', media_type: 'image/png', data: shot } }]
        }]
      })
    }
  }

  return { success: false, message: 'Límite de pasos alcanzado' }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

module.exports = { runAgent }
