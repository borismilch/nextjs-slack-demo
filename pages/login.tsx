import React, { SyntheticEvent } from 'react';
import Image from 'next/image'

import { auth, googleProvider } from '@/lib/firebase'
import { signInWithPopup } from 'firebase/auth'

import { useNavigation } from '@/hooks/.'

const Login = () => {

  const {pushRouter} = useNavigation()

  const signIn = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    signInWithPopup(auth, googleProvider)
      .catch(e => console.log(e.message))
      .then(result => pushRouter('/'))
  }

  return (
    <div className="h-screen w-screen bg-[#f8f8f8] flex items-center justify-center">

      <div className="flex bg-white flex-col shadow-md p-8 w-full mb-[40px] max-w-[500px]">
        <div className='relative h-[100px] mb-[23px] bg-white '>
          <Image 
            src={'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'}
            alt="dddd"
            layout='fill'
            objectFit={'contain'}
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>

         <h1 className='text-2xl text-black font-bold'>Sign in to Slack</h1>

         <h4 className="text-sm font-semibold">srack.com</h4>

          <button
            className='google_button'
            onClick={signIn} 
          >
            Sign in with Google</button>

        </div>

      </div>

      
    </div>
  )
};

export default Login;
