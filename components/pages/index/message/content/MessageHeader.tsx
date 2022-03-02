import { dayts } from 'lib/dayts';
import React from 'react';
import { IMessage } from 'models/.'
import Image from 'next/image'

interface MessageHeaderProps {
  message: IMessage
}

const MessageHeader: React.FC<MessageHeaderProps> = ({message}) => {
  return (
    <div className='flex md:py-2 gap-1 pb-2'>

      <div className='avatar flex rounded md:hidden'>
        <Image 
          src={message.userImage}
          layout='fill'
          objectFit={'cover'}
        />
        
      </div>

      <div className='flex items-center gap-2 py-1'>

      <p className='text-xs font-semibold'>{message.username}</p>

      <p className={'text-xs ' + 'text-gray-500' }>
      {dayts((message?.createdAt?.seconds * 1000) || Date.now()).fromNow()}</p>
      
      </div>
   </div> 
  )
};

export default MessageHeader;
