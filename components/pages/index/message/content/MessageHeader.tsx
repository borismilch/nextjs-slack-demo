import { dayts } from '@/lib/dayts';
import React from 'react';
import { IMessage } from '@/models/.'

const MessageHeader: React.FC<{message: IMessage}> = ({message}) => {
  return (
    <div className='flex items-center gap-2'>

    <p className='text-xs font-semibold'>{message.username}</p>

    <p className={'text-xs ' + 'text-gray-500' }>
    {dayts((message?.createdAt?.seconds * 1000) || Date.now()).fromNow()}</p>
    
  </div>
  )
};

export default MessageHeader;
