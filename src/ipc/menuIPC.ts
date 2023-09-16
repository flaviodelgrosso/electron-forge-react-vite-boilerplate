import { BrowserWindow, ipcMain, Menu, shell } from 'electron';

import { MenuChannels } from 'src/channels/menuChannels';

export const registerMenuIpc = (mainWindow: BrowserWindow) => {
  ipcMain.on(MenuChannels.EXECUTE_MENU_ITEM_BY_ID, (event, id) => {
    const currentMenu = Menu.getApplicationMenu();

    if (currentMenu === null) {
      return;
    }

    const menuItem = currentMenu.getMenuItemById(id);
    if (menuItem) {
      const window = BrowserWindow.fromWebContents(event.sender) || undefined;
      menuItem.click(null, window, event.sender);
    }
  });

  ipcMain.on(MenuChannels.SHOW_CONTEXT_MENU, (event, template) => {
    const menu = Menu.buildFromTemplate(template);
    const window = BrowserWindow.fromWebContents(event.sender);
    if (window) {
      menu.popup({ window });
    }
  });

  ipcMain.handle(MenuChannels.WINDOW_MINIMIZE, () => {
    mainWindow.minimize();
  });

  ipcMain.handle(MenuChannels.WINDOW_MAXIMIZE, () => {
    mainWindow.maximize();
  });

  ipcMain.handle(MenuChannels.WINDOW_TOGGLE_MAXIMIZE, () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  ipcMain.handle(MenuChannels.WINDOW_CLOSE, () => {
    mainWindow.close();
  });

  ipcMain.handle(MenuChannels.WEB_TOGGLE_DEVTOOLS, () => {
    mainWindow.webContents.toggleDevTools();
  });

  ipcMain.handle(MenuChannels.WEB_ACTUAL_SIZE, () => {
    mainWindow.webContents.setZoomLevel(0);
  });

  ipcMain.handle(MenuChannels.WEB_ZOOM_IN, () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel + 0.5);
  });

  ipcMain.handle(MenuChannels.WEB_ZOOM_OUT, () => {
    mainWindow.webContents.setZoomLevel(mainWindow.webContents.zoomLevel - 0.5);
  });

  ipcMain.handle(MenuChannels.WEB_TOGGLE_FULLSCREEN, () => {
    mainWindow.setFullScreen(!mainWindow.fullScreen);
  });

  ipcMain.handle(MenuChannels.OPEN_GITHUB_PROFILE, (_event, id) => {
    shell.openExternal(`https://github.com/${id}`);
  });
};
