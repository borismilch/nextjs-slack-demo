import { IMessage } from 'models'
import React from 'react'
import { AnswearBody } from '.'

import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from 'lib/firebase'
import { collection } from 'firebase/firestore'
import { useAppSelector } from 'hooks/redux';
import { roomIdSelector } from 'redux/selectors';

interface AnswearMessageProps {
  message: IMessage
}

const AnswearBodyWrapper: React.FC<AnswearMessageProps> = (props) => {
  const { message } = props
  const roomId = useAppSelector(roomIdSelector)

  const [asnwears] = useCollection(collection(
    firestore, 'rooms', roomId, 'messages', message.id, 'answears'
  ))

  const readyAnsewars = 
  asnwears.docs.map(doc => ({...doc.data(), id: doc.id} as IMessage))


  return (
    <>
      <AnswearBody answears={readyAnsewars ? readyAnsewars : []}  message={message} />
    </>
  )
}

export default AnswearBodyWrapper