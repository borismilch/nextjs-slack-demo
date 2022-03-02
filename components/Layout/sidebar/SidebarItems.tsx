import React from 'react';
import { SidebarItem } from '.'
import { SiBlazor, BsChatDots, BiDotsVerticalRounded } from 'components/icons'

const SidebarItems: React.FC = () => {  

  const sidebarItems = [
    {
      text: 'Chatting',
      Icon: <BsChatDots className="text-white" />
    },

    {
      text: 'Reactions and Anwears',
      Icon: <SiBlazor className="text-white " />
    },

    {
      text: 'Reactions and ',
      Icon: <BiDotsVerticalRounded className="text-white" />
    },
  ]

  return (
    <div className='flex mt-3 flex-col items-center'>

    {
      sidebarItems.map(item => (
        <SidebarItem 
          key={item.text} 
          sidebarItem={{text: item.text}} 
          Icon={item.Icon} 
        />
      ))
    }

    </div>
  )
};

export default SidebarItems;
