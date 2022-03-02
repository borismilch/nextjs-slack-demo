import React from 'react';
import { ISidebarItem } from 'models';

import { useToggle } from 'hooks'
import {MdOutlineArrowDropDown, HiHashtag} from 'components/icons'
import { SidebarItem } from '..'
import { AnimatePresence, motion } from 'framer-motion'

import { useAppDispatch } from 'hooks/redux'
import { RoomSliceAction } from 'redux/actions'

interface SidebarChannelsProps {
  channels: ISidebarItem[]
}

const SidebarChannels: React.FC<SidebarChannelsProps> = ({channels}) => {

  const [open, changeOpen] = useToggle(false)
  const dispatch = useAppDispatch()

  const selectCurrentRoom = (id: string) => {
    dispatch(RoomSliceAction.setCurrentRoom(id))
  }

  const channelSidebatItem: ISidebarItem = {
    text: "Channels",
    onClick: changeOpen.bind(null, !open)
  }

  return (
    <div className="flex flex-col">

      <SidebarItem
        sidebarItem={channelSidebatItem} 
        Icon={<MdOutlineArrowDropDown 
          className={'sidebar_something ' 
          + (open && 'rotate-180')} 
        />}
      />

      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

        <div className="flex flex-col px-4">
          {channels?.map(item => (
            
            <SidebarItem 
              key={item.id}
              sidebarItem={
                {
                  text: item.text, 
                  onClick: selectCurrentRoom.bind(null, item.id)
                }
              }
              Icon={<HiHashtag className='text-white text-opacity-50 ' />}
            />
         
          ))}
        </div>

        </motion.div>
      )}
    </AnimatePresence>
      
    </div>
  )
};

export default SidebarChannels
