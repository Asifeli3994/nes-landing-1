require('dotenv').config()
const { app, BrowserWindow, ipcMain, desktopCapturer, Tray, Menu, nativeImage } = require('electron')
const path = require('path')
const { runAgent } = require('./agent/loop')

let mainWindow
let tray

global.captureScreen = async function () {
  const sources = await desktopCapturer.getSources({
    types: ['screen'],
    thumbnailSize: { width: 1280, height: 800 }
  })
  return sources[0].thumbnail.toDataURL('image/png').split(',')[1]
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 420,
    height: 220,
    frame: false,
    alwaysOnTop: true,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  })
  mainWindow.loadFile('renderer/index.html')
  mainWindow.on('close', (e) => {
    if (!app.isQuitting) {
      e.preventDefault()
      mainWindow.hide()
    }
  })
}

function createTray() {
  const icon = nativeImage.createEmpty()
  tray = new Tray(icon)
  tray.setToolTip('Agente Palmadas — activo')
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'Mostrar', click: () => mainWindow.show() },
    { label: 'Salir', click: () => { app.isQuitting = true; app.quit() } }
  ]))
  tray.on('click', () => mainWindow.show())
}

ipcMain.handle('run-agent', async (event, command) => {
  try {
    const result = await runAgent(command, {
      onStatus: (status) => {
        mainWindow.webContents.send('agent-status', status)
      },
      onConfirmNeeded: (reason) => {
        return new Promise((resolve) => {
          mainWindow.show()
          mainWindow.webContents.send('confirm-request', reason)
          ipcMain.once('confirm-response', (_, confirmed) => resolve(confirmed))
        })
      }
    })
    return result
  } catch (err) {
    console.error('Error en agente:', err)
    return { success: false, message: err.message }
  }
})

app.whenReady().then(() => {
  createWindow()
  createTray()
})

app.on('before-quit', () => { app.isQuitting = true })
