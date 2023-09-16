import { ipcRenderer } from 'electron';

import { ClickHandler } from 'src/webContents';

export interface IMenuItem {
  readonly id?: string;
  /** The user-facing label. */
  readonly label?: string;

  readonly click?: ClickHandler;
  /** The action to invoke when the user selects the item. */
  readonly action?: () => void;

  /** The type of item. */
  readonly type?: 'separator';

  /** Is the menu item enabled? Defaults to true. */
  readonly enabled?: boolean;

  /**
   * The predefined behavior of the menu item.
   * When specified, the click property will be ignored.
   */
  readonly role?: Electron.MenuItemConstructorOptions['role'];

  /**
   * Submenu that will appear when hovering this menu item.
   */
  readonly submenu?: ReadonlyArray<this>;

  readonly accelerator?: Electron.Accelerator;
}

/**
 * A menu item data structure that can be serialized and sent via IPC.
 */
export interface ISerializableMenuItem extends IMenuItem {
  readonly action: undefined;
}

export async function showContextualMenu(items: ReadonlyArray<IMenuItem>) {
  const indices = await ipcRenderer.invoke('show-contextual-menu', serializeMenuItems(items));

  if (indices !== null) {
    const menuItem = findSubmenuItem(items, indices);

    if (menuItem !== undefined && menuItem.action !== undefined) {
      menuItem.action();
    }
  }
}

/**
 * Remove the menu items properties that can't be serializable in
 * order to pass them via IPC.
 */
function serializeMenuItems(items: ReadonlyArray<IMenuItem>): ReadonlyArray<ISerializableMenuItem> {
  return items.map((item) => ({
    ...item,
    action: undefined,
    submenu: item.submenu ? serializeMenuItems(item.submenu) : undefined,
  }));
}

/**
 * Traverse the submenus of the context menu until we find the appropriate index.
 */
function findSubmenuItem(
  currentContextualMenuItems: ReadonlyArray<IMenuItem>,
  indices: ReadonlyArray<number>,
): IMenuItem | undefined {
  let foundMenuItem: IMenuItem | undefined = {
    submenu: currentContextualMenuItems,
  };

  for (const index of indices) {
    if (foundMenuItem === undefined || foundMenuItem.submenu === undefined) {
      return undefined;
    }

    foundMenuItem = foundMenuItem.submenu[index];
  }

  return foundMenuItem;
}
