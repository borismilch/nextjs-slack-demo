import React, { ReactElement } from 'react';

import { ISidebarItem } from 'models';

interface SidebarItemProps {
  sidebarItem: ISidebarItem, 
  Icon: ReactElement<any, any>
}

const SidebarItem:React.FC<SidebarItemProps> = (props) => {

  const {sidebarItem: { text, onClick }, Icon} = props
  
  return (
    <div 
      data-testid="sidebar-item"
      onClick={onClick ? onClick.bind(null) : null}
      className='sidebar_item_wrapper'>

      <div className='opacity-60'>
        {Icon}
      </div>
     
      <p className="font-medium leading-3 text-white text-opacity-50">
        {text}
      </p>

    </div>
  )
};

export default SidebarItem;
