const DANGEROUS_TYPE_KEYWORDS = [
  'rm -rf', 'rm -r ', 'sudo rm',
  'del /f', 'del /s', 'format c:',
  'shred ', 'dd if=', 'mkfs',
  'DROP TABLE', 'DROP DATABASE', 'TRUNCATE TABLE'
]

function isTypeDangerous(text) {
  const lower = text.toLowerCase()
  return DANGEROUS_TYPE_KEYWORDS.some(k => lower.includes(k.toLowerCase()))
}

function extractPermissionRequest(content) {
  for (const block of content) {
    if (block.type === 'text') {
      const match = block.text.match(/\[PEDIR_PERMISO\]:\s*(.+)/i)
      if (match) return match[1].trim()
    }
  }
  return null
}

function checkAction(action) {
  if (action.action === 'type' && isTypeDangerous(action.text)) {
    return { needsConfirm: true, reason: `Comando potencialmente destructivo:\n"${action.text}"` }
  }
  return { needsConfirm: false }
}

module.exports = { checkAction, extractPermissionRequest }
