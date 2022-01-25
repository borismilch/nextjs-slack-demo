import React from 'react';
import Image from 'next/image'

import { AiOutlineClockCircle, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'

import { auth } from '@/lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import { useNavigation } from '@/hooks/.'

const Header = () => {

  const [user] = useAuthState(auth)

  const { pushRouter } = useNavigation()

  const singOut = async () => {
    await auth.signOut()

    pushRouter('/login')

  }

  return (
    <header className ="flex relative w-full gap-2 items-center justify-center px-4 p-1 bg-darken">

      <div className='relative flex items-center flex-grow'>

        <div className='text-white flex items-center justify-end  ml-[80px] text-xl'>
          <AiOutlineClockCircle />
        </div>

      </div>

      <div className='flex items-center max-w-[50%] bg-light flex-grow gap-2 px-3 rounded-lg '>

        <div className='text-white text-xl'>
          <BiSearchAlt2 />
        </div>

        <input
          type="text" 
          className='bg-transparent h-[30px] text-xs border-secondary rounded-md placeholder-white placeholder-opacity-50 text-white focus:ring-0' 
          placeholder="Placehoder..."
        />

      </div>

      <div className ="justify-self-end justify-end  flex-grow  flex items-center gap-2">

        <div className='text-white  text-xl'>
          <AiOutlineQuestionCircle />
        </div>

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

export default Header;
