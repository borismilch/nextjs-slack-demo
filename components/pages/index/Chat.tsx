import React from 'react';

import { ChatHeader, ChatForm, ChatMessages } from '.'
import { observer } from 'mobx-react-lite'
import { RoomStore } from '@/store/.'
import { useDocument } from 'react-firebase-hooks/firestore';

import { firestore } from '@/lib/firebase'
import { collection, doc } from 'firebase/firestore'

const Chat = () => {
  const [room, loading, error] = useDocument(doc(collection(firestore, 'rooms'), RoomStore.roomId))

  return (
    <div className='flex flex-col w-screen'>

      <ChatHeader />

      <div className='flex-grow'>
        { loading ? <p>Loading...</p> : (
          <ChatMessages />
        ) }
      </div>

      {!loading && <ChatForm channelName={room.data().name} />}
  
    </div>
  )
};

export default observer(Chat)
