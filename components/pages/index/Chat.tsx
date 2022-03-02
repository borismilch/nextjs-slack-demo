import React from 'react';

import { useDocument } from 'react-firebase-hooks/firestore';
import { firestore } from 'lib/firebase'
import { collection, doc } from 'firebase/firestore'
import { useAppSelector } from 'hooks/redux';
import { roomIdSelector } from 'redux/slices/room.selector'; 

import { DumbChat } from './dumb'
import { IRoom } from 'models';

const Chat = () => {
  const roomId = useAppSelector(roomIdSelector)
  const [room, loading] = useDocument(doc(collection(firestore, 'rooms'), roomId))

  return (
    <DumbChat 
      loading={loading} 
      room={room ? 
        {...room.data(), id: room.id} as IRoom : 
        {} as IRoom
      } 
    />
  )
};

export default Chat
