import React from 'react';

import { ISidebarItem } from '@/models/.';

const SidebarItem:React.FC<{sidebarItem: ISidebarItem, Icon: any}> = ({sidebarItem: { text, onClick }, Icon}) => {
  return (
    <div 
      onClick={onClick ? onClick.bind(null) : null}
      className='flex items-center  gap-2 w-full p-2 px-3 hover:bg-darken cursor-pointer transition-all duration-200'>

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
