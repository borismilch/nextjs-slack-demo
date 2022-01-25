import React from 'react';
import { BiInfoCircle } from 'react-icons/bi'
import { FaStarOfDavid } from 'react-icons/fa'
import { FaSlackHash } from 'react-icons/fa'

const ChatHeader = () => {
  return (
    <div className='p-[10px] py-[4px] flex-grow-0 flex items-center justify-between w-full border-b  border-gray-300'>

      <div className='flex items-center gap-2'>

        <FaSlackHash className='text-opacity-50 text-xl' />

        <p className="font-medium">Room name</p>

        <FaStarOfDavid className='text-opacity-50 text-xl' />

      </div>

      <div className="flex items-center gap-2 transtion-all active:scale-90 duration-200 hover:bg-gray-100 rounded cursor-pointer p-2">

        <BiInfoCircle className='text-gray-500' />

        <p className="text-gray-500">Details</p>

      </div>

    </div>
  )
};

export default ChatHeader;
