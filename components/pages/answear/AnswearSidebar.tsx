import React from 'react';
import { observer } from 'mobx-react-lite'

import { firestore } from 'lib/firebase'
import { useDocument } from 'react-firebase-hooks/firestore'
import { doc } from 'firebase/firestore'
import { AnswearHeader, AnswearBodyWrapper } from '.'

import { useAppSelector } from 'hooks/redux';
import { roomIdSelector, isCommentingSelector, messageIdSelector } from 'redux/selectors';
import { IMessage } from 'models';
import AnswearHeaderWrapper from './AnswearHeaderWrapper';

const AnswearSidebar = () => {

  const roomId = useAppSelector(roomIdSelector)
  const messageId = useAppSelector(messageIdSelector)
  const isCommenting = useAppSelector(isCommentingSelector)

  const [message] = useDocument(doc(firestore, 'rooms', roomId, 'messages', messageId))

  return (
    <>
    { isCommenting && <div className='mobile_overlay' />}
    <div className={'answear_sidebar_wrapper ' }>
      <AnswearHeaderWrapper />

      { message && 
        <AnswearBodyWrapper 
        message={{...message.data(), id: message.id} as IMessage}  /> 
      }

    </div>
    </>
  )
};

export default observer(AnswearSidebar);
