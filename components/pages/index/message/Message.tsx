import React from 'react';
import Image from 'next/image'

import { dayts } from '@/lib/dayts'

import { IMessage, IReaction } from '@/models/.'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'

import { MessageIcons, MessageReactions, MessageAnswears } from '..'
import { useCollection } from 'react-firebase-hooks/firestore'

import { firestore } from '@/lib/firebase'
import { collection } from 'firebase/firestore'

import { observer } from 'mobx-react-lite'
import { RoomStore } from '@/store/.'

const Message: React.FC<{message: IMessage, showAnswears?: boolean, isAnswear?: boolean}> = ({message, showAnswears = true, isAnswear = false}) => {

  const [reactions] = useCollection(collection(firestore, 'rooms', RoomStore.roomId, 'messages', message.id, 'reactions' ))

  const [user] = useAuthState(auth)

  return (
    <div className={'message rounded-md mb-3 relative group mx-0 ' + (user?.uid === message.userId && ' mx-3 bg-gray-50')}>

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

          <p className={'text-xs ' + 'text-gray-500' }>
          {dayts((message?.createdAt?.seconds * 1000) || Date.now()).fromNow()}</p>
          
        </div>

        <div className='flex items-center'>

          
         { message.adressat && 
            <div className='relative inline-block '>
             <p className='marker'>@{message.adressat}</p>

             <span className='tooltip tooltip-top -left-1 z-40'>
                {'For ' + message.adressat}
             </span>

           </div>
         }

          <p className='text-sm font-medium'>{message.body}</p>

        </div>

        <MessageReactions reactions={reactions?.docs?.map(item => ({ ...item.data(), id: item.id })) as IReaction[]} />

        { showAnswears && <MessageAnswears messageId={message.id} /> }

      </div>

     { !isAnswear && <div className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -top-3 right-3'>

        <MessageIcons message = {message}  reactions={reactions?.docs?.map(item => ({ ...item.data(), id: item.id })) as IReaction[]} />

      </div>}

    </div>
  )
};

export default observer(Message);
