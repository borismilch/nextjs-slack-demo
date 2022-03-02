import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firestore } from 'lib/firebase'
import { collection} from 'firebase/firestore'
import { useAppSelector } from 'hooks/redux'
import { roomIdSelector } from 'redux/slices/room.selector'
import { ChatsLinksHeader } from '..' 
import { ILink } from 'models'

const ChatLinksHeaderSmart = () => {
  const roomId = useAppSelector(roomIdSelector)
  
  const [urls] = useCollection(
    collection(firestore, 'rooms', roomId || "dd", 'links')
  )

  const validUrls = urls?.docs?.map(item => ({...item.data(), id: item.id} as ILink))

  return (
    <>
      <ChatsLinksHeader urls={validUrls ? validUrls : []}  />
    </>
  )
}

export default ChatLinksHeaderSmart