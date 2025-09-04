const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // 为了本地应用的兼容性，暂时保持原设置
      // 在生产环境中建议使用更安全的配置
      nodeIntegration: true,
      contextIsolation: false,
      // 添加安全限制
      webSecurity: true,
      allowRunningInsecureContent: false
    }
  })

  win.loadFile('index.html')

  // 开发环境下打开开发者工具
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}) 