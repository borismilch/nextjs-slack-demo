import React from 'react';
import Image from 'next/image'

import { AiOutlineClockCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'

import { auth } from '@/lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useNavigation } from '@/hooks/.'

import { observer } from 'mobx-react-lite'
import { SidebarStore } from '@/store/.'

import AppIcon, {HiMenuAlt2} from '@/components/icons'

const Header = () => {

  const [user] = useAuthState(auth)

  const { pushRouter } = useNavigation()

  const singOut = async () => {
    await auth.signOut()

    pushRouter('/login')

  }

  const toggleSidebar = () => {

    SidebarStore.changeOpen(!SidebarStore.open)
  }

  return (
    <header className ="flex relative w-full z-50 gap-2 items-center justify-center px-4 p-1 bg-darken">

      <div className='relative flex items-center flex-grow'>

        {
          <div onClick={() => toggleSidebar()}> 
            <AppIcon 
              
              Icon={<HiMenuAlt2 className='text-xl text-white font-semibold' />}
              classes='rounded-[50%] hover:bg-transparent'
            />
          </div>
       }

        <div className='md:ml-[20px] lg:ml-[80px]'>
          <AppIcon 
            Icon={<AiOutlineClockCircle className='text-xl text-white font-semibold' />}
            classes='rounded-[50%] hover:bg-transparent'
          />
        </div>

      </div>

      <div className='md:flex hidden items-center max-w-[50%] bg-light flex-grow gap-2 px-3 rounded-lg '>

        <div className='text-white text-xl'>
          <BiSearchAlt2 />
        </div>

        <input
          type="text" 
          className='bg-transparent h-[30px] text-xs border-secondary rounded-md placeholder-white placeholder-opacity-50 text-white focus:ring-0' 
          placeholder="Placehode r..."
        />

      </div>

      <div className ="justify-self-end justify-end  flex-grow  flex items-center ">

         <AppIcon 
            Icon={<BiSearchAlt2 className='text-xl text-white font-semibold' />}
            classes='rounded-[50%] hover:bg-transparent md:hidden pr-0'
          />
     
        <AppIcon 
          Icon={<AiOutlineQuestionCircle className='text-xl text-white mr-2 font-semibold' />}
          classes='rounded-[50%] hover:bg-transparent pr-0 pl-1'
        />
       

        <div 
          onClick={singOut.bind(null)}
          className="avatar brightness-80 hover:brightness-95 rounded-md transition-all duration-200 cursor-pointer">
          { user?.photoURL && <Image 
            src={user?.photoURL}
            layout='fill'
            objectFit={"cover"}
          />}
        </div>

      </div>

    </header>
  );
};

export default observer(Header);
