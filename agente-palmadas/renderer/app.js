// ─── CONFIG ──────────────────────────────────────────────────────
const CLAP_THRESHOLD = 0.35   // sensibilidad del micro (0–1)
const DOUBLE_CLAP_WINDOW = 800 // ms máximos entre dos palmadas

// ─── DETECCIÓN DE PALMADAS ───────────────────────────────────────
let lastClapTime = 0
let clapCount    = 0

async function startClapDetection() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  const audioCtx = new AudioContext()
  const analyser = audioCtx.createAnalyser()
  analyser.fftSize = 256
  audioCtx.createMediaStreamSource(stream).connect(analyser)
  const dataArray = new Float32Array(analyser.fftSize)

  setInterval(() => {
    analyser.getFloatTimeDomainData(dataArray)
    const rms = Math.sqrt(dataArray.reduce((s, v) => s + v * v, 0) / dataArray.length)

    if (rms > CLAP_THRESHOLD) {
      const now = Date.now()
      const gap = now - lastClapTime

      if (gap > 150) {
        lastClapTime = now
        clapCount++

        if (clapCount >= 2 && gap < DOUBLE_CLAP_WINDOW) {
          clapCount = 0
          onDoubleClap()
        } else if (gap > DOUBLE_CLAP_WINDOW) {
          clapCount = 1
        }
      }
    }
  }, 50)
}

// ─── FLUJO PRINCIPAL ─────────────────────────────────────────────
function onDoubleClap() {
  updateStatus('🎤 ESCUCHANDO...')
  startVoiceCapture()
}

function startVoiceCapture() {
  const recognition = new webkitSpeechRecognition()
  recognition.lang = 'es-ES'
  recognition.continuous = false
  recognition.interimResults = false

  const timeout = setTimeout(() => {
    recognition.stop()
    updateStatus('😴 IDLE')
  }, 5000)

  recognition.onresult = (e) => {
    clearTimeout(timeout)
    const cmd = e.results[0][0].transcript
    updateStatus(`🤔 "${cmd}"`)
    window.electronAPI.runAgent(cmd).then(result => {
      updateStatus(result.success ? `✅ ${result.message}` : `❌ ${result.message}`)
      setTimeout(() => updateStatus('😴 IDLE'), 4000)
    })
  }

  recognition.onerror = () => {
    clearTimeout(timeout)
    updateStatus('😴 IDLE')
  }

  recognition.start()
}

// ─── UI ──────────────────────────────────────────────────────────
function updateStatus(text) {
  document.getElementById('status').textContent = text
}

window.electronAPI.onAgentStatus((s) => updateStatus(`⚡ ${s}`))

// ─── DIÁLOGO DE CONFIRMACIÓN ─────────────────────────────────────
window.electronAPI.onConfirmRequest((reason) => {
  document.getElementById('confirm-reason').textContent = reason
  document.getElementById('confirm-dialog').style.display = 'flex'
})

document.getElementById('btn-allow').onclick = () => {
  document.getElementById('confirm-dialog').style.display = 'none'
  window.electronAPI.sendConfirmResponse(true)
}

document.getElementById('btn-deny').onclick = () => {
  document.getElementById('confirm-dialog').style.display = 'none'
  window.electronAPI.sendConfirmResponse(false)
}

// ─── ARRANQUE ────────────────────────────────────────────────────
startClapDetection()
