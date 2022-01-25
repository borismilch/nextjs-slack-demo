import React from 'react';
import Image from 'next/image'

import { dayts } from '@/lib/dayts'

import { IMessage } from '@/models/.'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'

const Message: React.FC<{message: IMessage}> = ({message}) => {

  const [user] = useAuthState(auth)

  return (
    <div className={'message rounded-md ' + (user?.uid === message.userId && ' mx-10 bg-blue-600 text-white')}>

      <div className='avatar rounded'>
        <Image 
          src={message.userImage}
          layout='fill'
          objectFit={'cover'}
        />
        
      </div>

      <div className='flex flex-col '>

        <div className='flex items-center gap-2'>

          <p className='text-xs font-semibold'>{message.username}</p>

          <p className={'text-xs ' + 
            (user?.uid === message.userId ? 'text-white text-opacity-60' : 'text-gray-500' )}>
            {dayts(message?.createdAt?.seconds * 1000).fromNow()}</p>
          
        </div>

        <p className='text-sm font-medium'>{message.body}</p>

      </div>

    </div>
  )
};

export default Message;
