const windowStateManager = require('electron-window-state');
const { app, BrowserWindow } = require('electron');
const serve = require('electron-serve');

try {
    require('electron-reloader')(module);
} catch (e) {}

const serveURL = serve({ directory: '.' });
const port = process.env.PORT || 5173;
const dev = !app.isPackaged;
let mainWindow;

function createWindow() {
    let windowState = windowStateManager({
        defaultWidth: 1000,
        defaultHeight: 1000,
    });

    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        minHeight: 700,
        minWidth: 700,
        webPreferences: {
            enableRemoteModule: true,
            contextIsolation: true,
            nodeIntegration: true,
            spellcheck: false,
            devTools: dev,
        },
    });

    windowState.manage(mainWindow);

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('close', () => {
        windowState.saveState(mainWindow);
    });

    return mainWindow;
}

function loadVite(port) {
    mainWindow.loadURL(`http://localhost:${port}`).catch((e) => {
        console.log('Error loading URL, retrying', e);
        setTimeout(() => {
            loadVite(port);
        }, 200);
    });
}

function createMainWindow() {
    mainWindow = createWindow();
    mainWindow.once('close', () => {
        mainWindow = null;
    });

    if (dev) loadVite(port);
    else serveURL(mainWindow);
}

app.once('ready', () => {
    createMainWindow();
});

app.on('activate', () => {
    if (!mainWindow) {
        createMainWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
