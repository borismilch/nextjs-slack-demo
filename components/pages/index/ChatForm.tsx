import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { RoomStore } from '@/store/.'

import { useInputValue } from '@/hooks/.'

import { firestore } from '@/lib/firebase'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase'

const ChatForm: React.FC<{channelName: string}> = ({channelName}) => {

  const [user] = useAuthState(auth)

  const [value, bind, cleanValue] = useInputValue()

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
      userId: user?.uid
    }

    const messageRef = collection(firestore, 'rooms', RoomStore.roomId, 'messages')

    await addDoc(messageRef, message)
  }

  return (
    <form onSubmit={sendMessage.bind(null)}>

      <div className='p-1 m-2 bg-transparent flex items-center pr-6 border-gray-300 border-2 rounded-xl bg-gray-50 transition-all duration-200'>

      <input 
        {...bind} 
        type="text" 
        placeHolder="Send a message..." 
        className = 'cleanInput text-sm h-[30px] flex-grow'
      />

      <button type="submit">
        Send
      </button>

      </div>
    </form>
  )
};

export default observer(ChatForm);
