const { createPublicKey } = require('crypto');
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

const isErrorWindowOpen = () => !errorWindow?.isDestroyed() && errorWindow?.isFocusable();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createMainWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  
  // Build menu
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert 
  Menu.setApplicationMenu(mainMenu);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on("connection:fail", function(e, item){
  createErrorWindow();
  //mainWindow.webContents.send("connection:fail", item);
});
let errorWindowCheck = false;
function createErrorWindow(){
  if (errorWindowCheck) {
    return;
  }
  const errorWindow = new BrowserWindow({
    width: 100,
    height: 100,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  errorWindowCheck = true;
  // and load the index.html of the app.
  errorWindow.loadFile(path.join(__dirname, 'options.html'));
}

const mainMenuTemplate = [
  {
    label:"File",
    submenu:[
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q": "Ctrl+Q",
        click(){
          app.quit()
        }
      }
    ]
  }
]