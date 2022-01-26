import React, { ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { RoomStore, AnswearStore } from '@/store/.'

import { useInputValue } from '@/hooks/.'

import {ButtonGroup} from '@/components/forms'

import { firestore } from '@/lib/firebase'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';

import { useToggle } from '@/hooks/.'

import { ChatFormActions } from '..'
import { MediaStore } from '@/store/.'

import dynamic from 'next/dynamic'
import IUser from '@/models/types';

const ChatForm: React.FC<{updateId?: string}> = ({updateId}) => {

  const [users] = useCollectionDataOnce(collection(firestore, 'users'))

  const [open, changeOpen] = useToggle(false)

  const [user] = useAuthState(auth)
  const [adressat, setAdressat] = useState<string>('')

  const [value, bind, cleanValue, changeValue] = useInputValue()
  const EmojiPicker = dynamic(() => import('@/components/forms/emojiPicker/EmojiPicjker'))

  const sendMessage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!value) { return }
    cleanValue()

    const message = {
      createdAt: serverTimestamp(),
      body: value,
      userImage: user?.photoURL,
      username: user?.displayName,
      role: 'text',
      userId: user?.uid,
      adressat: adressat || ''
    }

    if (updateId) {
      const messageRef = collection(firestore, 'rooms', RoomStore.roomId, 'messages', updateId, 'answears')
      await addDoc(messageRef, message)
      AnswearStore.cleanMessageComment()

    } else {

      const messageRef = collection(firestore, 'rooms', RoomStore.roomId, 'messages')
      await addDoc(messageRef, message)
    }

    setAdressat('')
  }

  const addAdressat = () => {
    const address = prompt('For who?')

    const valid = users.find((user: IUser) => user.displayName === address || user.email === address)

    if (!valid) {
      alert('invalid user') 
      return
    }

    if (address) {
      setAdressat(address)
    }
  }

  return (
    <form onSubmit={sendMessage.bind(null)}>

      <div className={'message_form flex-col mb-4 ' + (updateId && 'bg-white')}>
    
      <input 
        {...bind} 
        type="text" 
        placeholder="Send a message..." 
        className = 'cleanInput text-sm h-[30px] w-full mr-auto flex-grow'
      />

      <div className='flex w-full relative justify-between'>

        <ChatFormActions
          cb2={changeOpen.bind(null, !open)}
          cb4={MediaStore.toggleControll}
          cb3={addAdressat.bind(null)}
         />

        <div 
          className={'absolute -top-[280px] left-0 transition-all duration-300 ' + (open ? 'opacity-100 visible' : 'opacity-0 hidden')}>
          <EmojiPicker changeValue={(val: string) => changeValue(value + val)} />
        </div>

        <ButtonGroup 
          disabled={!value}
          onClickFirst={sendMessage.bind(null)}
          onClickSecond={() => {}}
        />

      </div>

      </div>
    </form>
  )
};

export default observer(ChatForm);
