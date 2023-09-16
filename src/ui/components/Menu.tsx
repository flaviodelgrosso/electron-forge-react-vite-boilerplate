import React, { createRef, useMemo, useRef } from 'react';

import appLogo from 'assets/icons/icon.png';
import { MenuChannels } from 'src/channels/menuChannels';
import { fixAcceleratorText } from 'src/menu/accelerators';
import menuList from 'src/menu/appMenu';
import { useEventListener } from 'src/ui/hooks';

export default function Menu() {
  const activeMenuIndex = useRef<number | null>(null);
  const menusRef = useMemo(() => menuList.map(() => createRef<HTMLDivElement>()), []);

  useEventListener('keydown', (event) => handleKeyDown(event));

  useEventListener('mousedown', (event) => handleClickOutside(event));

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.repeat) return;
    if (e.altKey) activeMenuIndex.current && closeActiveMenu();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (activeMenuIndex.current != null) {
      if (
        menusRef[activeMenuIndex.current].current &&
        !menusRef[activeMenuIndex.current].current?.contains(event.target as Node)
      ) {
        closeActiveMenu();
      }
    }
  };

  const showMenu = (index: number, e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (menusRef[index].current?.classList.contains('active')) {
      closeActiveMenu();
    } else {
      menusRef[index].current?.classList.add('active');
      menusRef[index].current?.parentElement?.classList.add('active');
      activeMenuIndex.current = index;
    }
  };

  const onMenuHover = (index: number) => {
    if (activeMenuIndex.current != null) {
      menusRef[activeMenuIndex.current].current?.classList.toggle('active');
      menusRef[index].current?.classList.toggle('active');
      menusRef[index].current?.parentElement?.classList.toggle('active');
      menusRef[activeMenuIndex.current].current?.parentElement?.classList.toggle('active');

      activeMenuIndex.current = index;
    }
  };

  const closeActiveMenu = () => {
    if (activeMenuIndex.current != null) {
      menusRef[activeMenuIndex.current].current?.classList.remove('active');
      menusRef[activeMenuIndex.current].current?.parentElement?.classList.remove('active');
      activeMenuIndex.current = null;
    }
  };

  const handleAction = (menuItem: Electron.MenuItemConstructorOptions) => {
    closeActiveMenu();
    const actionId = menuItem.id;
    if (actionId) {
      if (actionId === MenuChannels.OPEN_GITHUB_PROFILE) {
        return electron.ipcRenderer.invoke(actionId, menuItem.label);
      }
      return electron.ipcRenderer.send(MenuChannels.EXECUTE_MENU_ITEM_BY_ID, actionId);
    }
  };

  const renderItemAccelerator = (menuItem: Electron.MenuItemConstructorOptions) => {
    if (menuItem.id === MenuChannels.WEB_ZOOM_IN) {
      const firstKey = __DARWIN__ ? '⌘' : 'Ctrl';
      const plus = __DARWIN__ ? '' : '+';
      const thirdKey = '+';
      return `${firstKey}${plus}${thirdKey}`;
    }

    if (menuItem.accelerator) {
      return fixAcceleratorText(menuItem.accelerator);
    }
  };

  return (
    <section className='window-titlebar-menu'>
      {/* Titlebar icon */}
      <section className='window-titlebar-icon'>
        <img src={appLogo} alt='App logo' />
      </section>

      {menuList.map(({ label, submenu }, menuIndex) => {
        return (
          <div className='menu-item' key={`menu_${menuIndex}`}>
            <div
              className='menu-title'
              role='button'
              tabIndex={0}
              onClick={(e) => showMenu(menuIndex, e)}
              onKeyDown={(e) => showMenu(menuIndex, e)}
              onMouseEnter={() => onMenuHover(menuIndex)}
              onDoubleClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.preventDefault()}
            >
              {label}
            </div>
            <div className='menu-popup' ref={menusRef[menuIndex]}>
              {Array.isArray(submenu) &&
                submenu.map((menuItem, menuItemIndex) => {
                  if (menuItem.type === 'separator') {
                    return (
                      <div key={`menu_${menuIndex}_popup_item_${menuItemIndex}`} className='popup-item-separator' />
                    );
                  }

                  return (
                    <div
                      key={`menu_${menuIndex}_popup_item_${menuItemIndex}`}
                      className='menu-popup-item'
                      onMouseDown={(e) => e.preventDefault()}
                      onKeyDown={(e) => e.preventDefault()}
                      role='button'
                      tabIndex={0}
                      onClick={() => handleAction(menuItem)}
                    >
                      <div className='popup-item-name'>{menuItem.label}</div>
                      <div className='popup-item-shortcut'>{renderItemAccelerator(menuItem)}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
