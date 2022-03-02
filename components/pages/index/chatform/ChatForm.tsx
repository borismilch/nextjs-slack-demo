import React, { useState } from 'react';

import { useInputValue } from 'hooks/.'
import { firestore, auth } from 'lib/firebase'
import { collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import {ChatMediaForm} from '.'
import { ChatFormInteranctions } from '.';

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { mediaSelector, roomIdSelector } from 'redux/selectors'
import { MediaSliceActions } from 'redux/actions';
import { messageIdSelector } from 'redux/selectors';

import { MessageService } from 'services';
import { IUser } from 'models/types';

interface ChatFormProps {
  updateId?: string
}

const ChatForm: React.FC<ChatFormProps> = ({updateId}) => {

  const [users] = useCollectionDataOnce(collection(firestore, 'users'))
  const [user] = useAuthState(auth)
  const [adressat, setAdressat] = useState<string>('')
  const {files, images, documents, isDocuments, isVideo } = useAppSelector(mediaSelector)
  const [value, bind, cleanValue, changeValue] = useInputValue()

  const filesGreaterThanImages = files.length > images.length
  const docsGreaterThanFiles = files.length > documents.length
  const isFiles = files.length ? filesGreaterThanImages : !value

  const dispatch = useAppDispatch()
  const isButtonDisabled = !isDocuments ? isFiles : docsGreaterThanFiles
  const roomId = useAppSelector(roomIdSelector)
  const commentingId = useAppSelector(messageIdSelector)

  const sendMessage = async () => {
    if (!value && !images.length && !documents.length) { return }
    cleanValue()

    const role = isDocuments ? 'document' : isVideo ? 'video':images?.length ? 'image': 'text'
    const body = 
    isDocuments ? documents : isVideo ? images[0] : images.length ?
    images.slice().map(item => ({id: item.id, url: item.url})) : value

    const newMessage = MessageService.createMessage(user, body, role, adressat)
    await MessageService.sendRoomMessage(commentingId, roomId, newMessage)

    setAdressat('')
    dispatch(MediaSliceActions.cleanAllAferSend())
  }

  const addAdressat = () => {
    const adress = MessageService.addAdressat(users as IUser[])
    if(adress) setAdressat(adress)
  }

  return (
    <form onSubmit={sendMessage.bind(null)}>

    <div className={'message_form mb-4 items-end ' + 
    (updateId && 'bg-white ')}
      style={{flexDirection: files.length ? 'row' : "column"}}
    >
      { !(files.length > 0) ? 
          <input 
            {...bind} 
            type="text" 
            placeholder="Send a message..." 
            className = 'cleanInput text-sm h-[30px] w-full mr-auto flex-grow'
          /> : <ChatMediaForm  /> 
      }

        <ChatFormInteranctions 
          addAdressat={addAdressat}
          changeValue={changeValue}
          isButtonDisabled={isButtonDisabled} 
          currentValue={value}
          sendMessage={sendMessage}
        />

      </div>
    </form>
  )
};

export default ChatForm
