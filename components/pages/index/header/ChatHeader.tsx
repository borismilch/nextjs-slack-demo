
import {IRoom} from 'models/.';
import React from 'react';
import { BiInfoCircle } from 'react-icons/bi'
import { FaStarOfDavid } from 'react-icons/fa'
import { HiOutlineHashtag } from 'react-icons/hi'

import {ChatLinksHeaderSmart} from '.'

const ChatHeader: React.FC<{room: IRoom}> = ({room}) => {

  return (
    <div className='flex flex-col '>

      <div className='room_wrapper'>

      <div className='flex items-center gap-2'>
        <HiOutlineHashtag className='text-opacity-50 ' />

        <p className="font-medium">{room.name}</p>

        <FaStarOfDavid className='text-opacity-50 text-xl' />
      </div>

      <div className="datails_wrapper">
        <BiInfoCircle className='text-gray-500' />

        <p className="text-gray-500">Details</p>
      </div>

      </div>
      <ChatLinksHeaderSmart />
    </div>
  )
};

export default ChatHeader;
