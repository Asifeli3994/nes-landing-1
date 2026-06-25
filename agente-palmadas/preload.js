const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  runAgent: (command) => ipcRenderer.invoke('run-agent', command),
  onAgentStatus: (cb) => ipcRenderer.on('agent-status', (_, s) => cb(s)),
  onConfirmRequest: (cb) => ipcRenderer.on('confirm-request', (_, r) => cb(r)),
  sendConfirmResponse: (confirmed) => ipcRenderer.send('confirm-response', confirmed)
})
