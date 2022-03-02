import React from 'react';
import Image from 'next/image'

const ChatPlaceholder = () => {
  return (
    <div className=' h-full flex items-center justify-center bg-[#f8f8f8] w-screen'>

      <div className="flex bg-white flex-col shadow-md p-8 w-full mb-[40px] max-w-[400px]">
        <div className='relative h-[100px] mb-[23px] bg-white '>
          <Image 
            src={'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'}
            alt="dddd"
            layout='fill'
            objectFit={'contain'}
          />
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
         <h1 className='text-2xl text-black font-bold'>Welcome to slack</h1>
         <h4 className="text-sm font-semibold">start chatting...</h4>
        </div>

      </div>
    </div>

  )
};

export default ChatPlaceholder;
