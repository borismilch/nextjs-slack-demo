import React from 'react';

import { HiOutlineEmojiHappy, HiOutlinePlusSm, BiImage, MdOutlineAlternateEmail } from '@/components/icons/.' 

import { AiFillYoutube } from 'react-icons/ai'

import AppIcon from '@/components/icons'
import { observer } from 'mobx-react-lite';
import { MediaStore } from '@/store/.'

import { useRef } from 'react'

import { IoDocumentText } from 'react-icons/io5'

const ChatFormActions: React.FC<{cb1?: () => void, cb2?: () => void, cb3?: () => void, cb4?: () => void}> = ({cb2, cb1, cb3, cb4}) => {

  const fileRef = useRef<HTMLInputElement>(null)

  const changeFile = () => {
    const file = fileRef?.current?.files[0]

    console.log(file)

    if (file) MediaStore.addFile(file)
  }

  const triggerInput = () => {
    fileRef?.current?.click()
  }

  return (
    <div className='flex items-center '>

      <AppIcon 
        Icon={<HiOutlinePlusSm className='text-gray-600 text-xl' />}
        tooltip={['more actions', 'tooltip-top']}
      />

      <AppIcon 
        onClick={cb2.bind(null)}
        Icon={<HiOutlineEmojiHappy className='text-gray-600 text-xl' />}
       
      />

      <AppIcon 
        onClick={cb3.bind(null)}
        Icon={<MdOutlineAlternateEmail className='text-gray-600 text-xl' />}
        tooltip={['send for', 'tooltip-top']}
      />

      <div 
        onClick={triggerInput.bind(null)}
      >

        <AppIcon 
          Icon={<BiImage className='text-gray-600 text-xl' />}
          tooltip={['send image', 'tooltip-top']}
        />

      </div>

      
      <div 
        onClick={() => {triggerInput(); MediaStore.addVideo()}}
      >

        <AppIcon 
          Icon={<AiFillYoutube className='text-gray-600 text-xl' />}
          tooltip={['send Video', 'tooltip-top']}
        />

      </div>

      <input type="file" hidden ref={fileRef} onChange={changeFile} />


      <div 
        onClick={() => {triggerInput(); MediaStore.addDocument()}}
      >

        <AppIcon 
          Icon={<IoDocumentText className='text-gray-600 text-xl' />}
          tooltip={['send Documents', 'tooltip-top']}
        />

      </div>

    </div>
  )
};

export default observer(ChatFormActions);
