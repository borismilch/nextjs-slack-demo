import React from 'react';

import { HiOutlineEmojiHappy, HiOutlinePlusSm, BiImage, MdOutlineAlternateEmail } from '@/components/icons/.' 

import AppIcon from '@/components/icons'
import { observer } from 'mobx-react-lite';
import { MediaStore } from '@/store/.'

const ChatFormActions: React.FC<{cb1?: () => void, cb2?: () => void, cb3?: () => void, cb4?: () => void}> = ({cb2, cb1, cb3, cb4}) => {
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
        onClick={() => MediaStore.toggleControll()}
      >

      <AppIcon 
        Icon={<BiImage className='text-gray-600 text-xl' />}
        tooltip={['send image', 'tooltip-top']}
      />


      </div>
    </div>
  )
};

export default observer(ChatFormActions);
