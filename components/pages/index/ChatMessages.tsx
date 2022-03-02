import React from 'react';

import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from 'lib/firebase'
import { collection } from 'firebase/firestore'

import { orderBy, query } from 'firebase/firestore'
import { DumcChatMesages } from './dumb';
import { IMessage } from 'models';
import { roomIdSelector } from 'redux/selectors';
import { useAppSelector } from 'hooks/redux';

const ChatMessages: React.FC = () => {
  const roomId = useAppSelector(roomIdSelector)

  const messagesRef = collection(firestore, 'rooms', roomId || 'ds', 'messages')
  const [messages, loading] = useCollection(query(messagesRef, orderBy('createdAt'))) 

  const usableMessages = messages?.docs.map(
    item => ({...item.data(), id: item.id})
  )

  return  (
    <DumcChatMesages 
      loading={loading} 
      messages={usableMessages ? usableMessages as IMessage [] : [] } 
      />
  )
};

export default ChatMessages
