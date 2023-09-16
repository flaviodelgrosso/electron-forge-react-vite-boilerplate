import React, { forwardRef } from 'react';

interface IMenuItemProps {
  label: string;
  submenu?: Electron.MenuItemConstructorOptions[];
  onMenuClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMenuMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMenuMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const PopupItem = forwardRef<HTMLDivElement, Partial<IMenuItemProps>>(({ submenu }, ref) => (
  <div className='menu-popup' ref={ref}>
    {submenu?.map((menuItem, menuItemIndex) => {
      if (menuItem.type === 'separator') {
        return <div key={`menu_${menuItemIndex}_popup_item_${menuItemIndex}`} className='popup-item-separator' />;
      }

      return (
        <div
          key={`menu_${menuItemIndex}_popup_item_${menuItemIndex}`}
          className='menu-popup-item'
          onMouseDown={(e) => e.preventDefault()}
          onKeyDown={(e) => e.preventDefault()}
          role='button'
          tabIndex={0}
        >
          <div className='popup-item-name'>{menuItem.label}</div>
          <div className='popup-item-shortcut'>{menuItem.accelerator}</div>
        </div>
      );
    })}
  </div>
));

PopupItem.displayName = 'PopupItem';

export const MenuItem: React.FC<IMenuItemProps> = ({
  label,
  submenu,
  onMenuClick,
  onMenuMouseDown,
  onMenuMouseEnter,
}) => (
  <div className='menu-item'>
    <div
      className='menu-title'
      onClick={onMenuClick}
      onMouseEnter={onMenuMouseEnter}
      onMouseDown={onMenuMouseDown}
      onKeyDown={(e) => e.preventDefault()}
      role='button'
      tabIndex={0}
    >
      {label}
    </div>
    <PopupItem {...{ submenu }} />
  </div>
);
