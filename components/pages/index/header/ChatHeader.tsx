
import {IRoom} from '@/models/.';
import React from 'react';
import { BiInfoCircle } from 'react-icons/bi'
import { FaStarOfDavid } from 'react-icons/fa'
import { HiOutlineHashtag } from 'react-icons/hi'

import {ChatsLinksHeader} from '..'

const ChatHeader: React.FC<{room: IRoom}> = ({room}) => {

  return (
    <div className='flex flex-col '>

      <div className='p-[15px] py-[6px] flex-grow-0 flex items-center justify-between w-full border-b  border-gray-300'>

      <div className='flex items-center gap-2'>

        <HiOutlineHashtag className='text-opacity-50 ' />

        <p className="font-medium">{room.name}</p>

        <FaStarOfDavid className='text-opacity-50 text-xl' />

      </div>

      <div className="flex items-center gap-2 transtion-all active:scale-90 duration-200 hover:bg-gray-100 rounded cursor-pointer p-2">

        <BiInfoCircle className='text-gray-500' />

        <p className="text-gray-500">Details</p>

      </div>

      </div>

      <ChatsLinksHeader />

    </div>

  )
};

export default ChatHeader;
