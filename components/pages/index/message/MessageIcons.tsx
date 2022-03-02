import React, { useEffect } from 'react';
import { auth } from 'lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { IDropItem, IMessage, IReaction } from 'models/.';

import dynamic from 'next/dynamic'
import { useInputValue } from 'hooks/.'
import { ReactionService } from 'services';

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { roomIdSelector } from 'redux/slices/room.selector'; 
import { AnswearSliceActions } from 'redux/actions';
import  DumbMessageIcons  from './dumb/DumbMessageIcons'

interface MessageIconsProps {
  message: IMessage,
  reactions: IReaction[] 
}

const MessageIcons: React.FC<MessageIconsProps> = (props) => {
  const {message, reactions} = props

  const roomId = useAppSelector(roomIdSelector)
  const [user] = useAuthState(auth)
  const dispatch = useAppDispatch()

  const [value, bind, clean, changeValue] = useInputValue()

  const commentMessage = () => {
    dispatch(AnswearSliceActions.commentMessage(message.id))
  }

  const deleteItem = async () => {
    await ReactionService.deleteItem(roomId, message.id)
  }

  const updateItem = async () => {
    await ReactionService.updateItem(roomId, message.id)
  }

  const addReaction = async (react: string) => {
    const reaction = {
      body: react,
      userId: user?.uid || 'ss',
    }
    const existReaction: IReaction = reactions.find(item => item.body === react && item.userId === user?.uid)
    await ReactionService.addReaction(roomId, message.id, reaction, existReaction)
  }

  const reactionItems = ["✨", "✔"]

  const dropItems:IDropItem[] = [
    {text: 'Delete', id: '12', onClick: deleteItem.bind(null) },
    {text: 'Change', id: '1ll2', onClick: updateItem.bind(null) }
  ]

  useEffect(() => {
    if (value) {
      addReaction(value[value.length - 1])
    }
  }, [value])

  return (
    <>
      <DumbMessageIcons 
        addReaction={addReaction}  
        changeValue={changeValue}
        commentMessage={commentMessage}
        dropItems={dropItems}
        message={message}
        reactionItems={reactionItems}
      />
    </>
  )
};

export default MessageIcons
