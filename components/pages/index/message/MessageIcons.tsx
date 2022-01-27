import React, { useEffect } from 'react';
import AppIcon, {BsFillChatRightTextFill, MdOutlineAddReaction, BsThreeDotsVertical} from '@/components/icons'

import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { firestore, auth } from '@/lib/firebase'

import { observer } from 'mobx-react-lite'

import { useAuthState } from 'react-firebase-hooks/auth';
import { IDropItem, IReaction } from '@/models/.';

import { RoomStore, AnswearStore } from '@/store/.' 
import dynamic from 'next/dynamic'

import {DropList} from '@/components/forms'

import { useInputValue, useToggle } from '@/hooks/.'
import IMessage from '@/models/chat/Imessage';

import {GrCloudDownload} from 'react-icons/gr'

const MessageIcons: React.FC<{message: IMessage, reactions: IReaction[] }> = ({message, reactions}) => {
  const [user] = useAuthState(auth)

  const [value, bind, clean, changeValue] = useInputValue()
  const [open, changeOpen] = useToggle(false)
  const [openMune, setOpenMenu] = useToggle(false)

  const EmojiPicher = dynamic(() => import('@/components/forms/emojiPicker/EmojiPicjker'))

  const deleteItem = async () => {
    const confirm = prompt('Are you sure?')

    if (!confirm) {
      return
    }
    await deleteDoc(doc(firestore, "rooms", RoomStore.roomId, 'messages', message.id))
  }

  const updateItem = async () => {

    const newMessage = prompt('Enter new mesage here')

    if (!newMessage) { alert('wrong new Message');return }

    await updateDoc(doc(firestore, "rooms", RoomStore.roomId, 'messages', message.id), { body: newMessage })
  }

  const dropItem:IDropItem[] = [
    {text: 'Delete', id: '12', onClick: deleteItem.bind(null) },
    {text: 'Change', id: '1ll2', onClick: updateItem.bind(null) }
  ]


  const addReaction = async (react: string) => {
    const reaction = {
      body: react,
      userId: user.uid,
    }

    const exsistReaction = reactions.find(item => item.body === react && item.userId === user.uid)

    if (exsistReaction) {
      await deleteDoc(doc(firestore, 'rooms', RoomStore.roomId, 'messages', message.id, 'reactions', exsistReaction.id))
    }

    else {
      await addDoc(collection(firestore, 'rooms', RoomStore.roomId, 'messages', message.id, 'reactions'), reaction)
    }

  }

  useEffect(() => {
    if (value) {
      addReaction(value[value.length - 1])
    }
  }, [value])

  return (
    <div className="flex bg-white  relative drop-shadow-md rounded-full items-center p-1">

      <AppIcon 
        Icon={ <p className="text-lg">✨</p> }
        classes='p-1'
        onClick={() => addReaction('✨')}
      />

      <AppIcon 
        Icon={ <p className="text-lg">✔</p> }
        classes='p-1'
        onClick={() => addReaction('✔')}
      />

      <AppIcon 
        Icon={<MdOutlineAddReaction className='text-lg text-gray-500'  />}
        text='reactions'
        classes='text-xs p-1'
        onClick={changeOpen.bind(null, !open)}
        
      />

     {  open && <div className={'absolute z-20 transform -translate-x-56 transition-all duration-300 '}>
            <EmojiPicher 
              changeValue={changeValue}
            />
        </div>}

      <div onClick={() => AnswearStore.commentMessage(message.id)}>
        <AppIcon 
          Icon={<BsFillChatRightTextFill className='text-sm text-gray-500'  />}
          text='answear'
          classes='text-xs p-1'
          
        />
      </div>

      { user.uid === message.userId && <>
       <div className='relative'>  

        <AppIcon 
          Icon={<BsThreeDotsVertical className='text-xl text-gray-500'  />}
          classes='text-xs p-1'
          onClick={setOpenMenu.bind(null, prev => !prev)}
        />

        </div>

        {openMune && <div onMouseLeave={setOpenMenu.bind(null, false)} className="absotute">
          <DropList
            onClose={setOpenMenu.bind(null, false)} 
            dropItems={dropItem}
          />
        </div>}
      </>}

    </div>
  )
};

export default observer(MessageIcons);
