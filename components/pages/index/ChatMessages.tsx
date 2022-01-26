import React from 'react';

import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'
import { observer } from 'mobx-react-lite'

import { RoomStore } from '@/store/.'
import { firestore } from '@/lib/firebase'

import { collection } from 'firebase/firestore'

import { useDebug } from '@/hooks/.'

import { Message } from '.'
import { IMessage } from '@/models/.';

import { useEffect, useRef } from 'react'
import { orderBy, query } from 'firebase/firestore'

const ChatMessages: React.FC = () => {

  const messagesRef = collection(firestore, 'rooms', RoomStore.roomId, 'messages')

  const [messages, loading] = useCollection(query(messagesRef, orderBy('createdAt'))) 

  const boxRef = useRef<HTMLDivElement>(null) 

  const {} = useDebug(messages)

  useEffect(() => {
   
    boxRef?.current?.scrollBy({
      top:100000,
      behavior: 'smooth'
    })

  }, [messages])

  if (loading) { return <p>Loading...</p> }

  return  (
    <div
      ref={boxRef}
      className="flex flex-col overflow-auto pb-10 scrollbar-thin max-h-[74vh]">

    {
      messages?.docs?.map((message) => (
        <Message 
          key={message.id}
          message={{...message.data(), id: message.id } as IMessage}
        />
      ))
    }

    </div>
  )
};

export default observer(ChatMessages)
