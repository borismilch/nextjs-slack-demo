import React from 'react'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { firestore } from 'lib/firebase'
import { doc } from 'firebase/firestore'
import { useAppSelector } from 'hooks/redux';
import { roomIdSelector } from 'redux/slices/room.selector';

import { AnswearHeader } from '.';
import { IRoom } from 'models';

const AnswearHeaderWrapper = () => {

  const roomId = useAppSelector(roomIdSelector)
  const [room] = useDocumentDataOnce(doc(firestore, 'rooms', roomId || 'ss'))
  return (
    <>
      <AnswearHeader room={room? room as IRoom : {} as IRoom} /> 
    </>
  )
}

export default AnswearHeaderWrapper