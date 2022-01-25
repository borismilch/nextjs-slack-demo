import React from 'react';

import {BiChevronDown} from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'

const SidebarHeader = () => {
  return (
    <div className='flex items-center gap-2 pt-2 p-3 border-white border-opacity-20 border-t border-b'>

      <h1 className="text-xl truncate text-white font-bold">
        Новое рабочее пространство
      </h1>

      <BiChevronDown className="text-white text-3xl" />

      <div className="rounded-full drop-shadow-sm flex-shrink-0 bg-white avatar flex items-center justify-center">

        <BsPencilSquare />

      </div>

    </div>
  )
};

export default SidebarHeader;
