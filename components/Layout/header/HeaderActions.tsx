import AppIcon from 'components/icons/AppIcon'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiMenuAlt2 } from 'react-icons/hi'

interface HeaderActionsProps {
  toggleSidebar: () => void
}

const HeaderActions: React.FC<HeaderActionsProps> = (props) => {

  const { toggleSidebar } = props

  return (
    <div className='relative flex items-center flex-grow'>
      {
        <div data-testid="menu-button" onClick={toggleSidebar.bind(null)}> 
          <AppIcon 
            Icon={<HiMenuAlt2 className='text-xl text-white font-semibold' />}
            classes='rounded-[50%] hover:bg-transparent'
          />
        </div>
      }

      <div className='md:ml-[20px] lg:ml-[80px]'>
        <AppIcon 
          Icon={
            <AiOutlineClockCircle 
            className='text-xl text-white font-semibold' />
          }
          classes='rounded-[50%] hover:bg-transparent'
        />
      </div>

   </div>
  )
}

export default HeaderActions