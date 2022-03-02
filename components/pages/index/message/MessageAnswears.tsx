import React from 'react';

import { firestore } from 'lib/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore'
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { AnswearSliceActions } from 'redux/actions';
import { roomIdSelector } from 'redux/selectors';

import { DumbMessageAnswears } from './dumb/'
import { IMessage } from 'models';

interface MessageAnswearProps {
  messageId: string
}

const MessageAnswears: React.FC<MessageAnswearProps> = ({messageId}) => {
  const roomId = useAppSelector(roomIdSelector)
  const [answears] = useCollectionData(collection(firestore, 'rooms', roomId || 'some', 'messages', messageId, 'answears'))
  const dispatch = useAppDispatch()

  const commentMessage = () => {
    dispatch(AnswearSliceActions.commentMessage(messageId))
  }

  return (
   <>
     <DumbMessageAnswears
        answears={answears as IMessage[]} 
        commentMessage={commentMessage} 
      />
   </>
  )
};

export default MessageAnswears
