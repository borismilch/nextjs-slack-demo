import React from 'react';

import { HiOutlineEmojiHappy, HiOutlinePlusSm, BiImage, MdOutlineAlternateEmail } from 'components/icons/.' 
import { AiFillYoutube } from 'react-icons/ai'
import AppIcon from 'components/icons'

import { useRef } from 'react'
import { IoDocumentText } from 'react-icons/io5'

import { useAppDispatch } from 'hooks/redux'
import { MediaSliceActions } from 'redux/actions'

import { carryFunction } from 'utils/helpers'

interface ChatFormActionProps {
  cb1?: () => void, 
  cb2?: () => void,
  cb3?: () => void, 
  cb4?: () => void
}

const ChatFormActions: React.FC<ChatFormActionProps> = (props) => {
  const {cb2, cb1, cb3, cb4} = props
  const fileRef = useRef<HTMLInputElement>(null)
  const dispatch = useAppDispatch()
  

  const addFile = (file: File) => {
    dispatch(MediaSliceActions.addFile(file))
  }

  const changeFile = () => {
    const file = fileRef?.current?.files[0]
    if (file) addFile(file)
  }

  const triggerInput = () => {
    fileRef?.current?.click()
  }

  const startVideInsert = carryFunction(() => {
    triggerInput(); 
    dispatch(MediaSliceActions.startVideoInsert())
  })

  const startDocumentInsert = carryFunction(() => {
    triggerInput(); 
    dispatch(MediaSliceActions.startDocumentInsert())
  })

  return (
    <div className='flex items-center '>

      <AppIcon 
        onClick={cb1?.bind(null)}
        Icon={<HiOutlinePlusSm className='text-gray-600 text-xl' />}
        tooltip={['more actions', 'tooltip-top']}
        classes='hidden md-block'
      />

      <AppIcon 
        onClick={cb2?.bind(null)}
        Icon={
          <HiOutlineEmojiHappy className='text-gray-600 text-xl' 
        />}
      />

      <AppIcon 
        onClick={cb3?.bind(null)}
        Icon={<MdOutlineAlternateEmail className='text-gray-600 text-xl' />}
        tooltip={['send for', 'tooltip-top']}
      />

      <div onClick={triggerInput.bind(null)}>
        <AppIcon 
          onClick={cb4?.bind(null)}
          Icon={<BiImage className='text-gray-600 text-xl' />}
          tooltip={['send image', 'tooltip-top']}
        />
      </div>
      <div data-testid="handler" onClick={startVideInsert()}>

        <AppIcon 
          Icon={<AiFillYoutube className='text-gray-600 text-xl' />}
          tooltip={['send Video', 'tooltip-top']}
        />
      </div>

      <input type="file" hidden ref={fileRef} onChange={changeFile} />

      <div data-testid="handler" onClick={startDocumentInsert()}>

        <AppIcon 
          Icon={<IoDocumentText className='text-gray-600 text-xl' />}
          tooltip={['send Documents', 'tooltip-top']}
        />

      </div>
    </div>
  )
};

export default ChatFormActions
