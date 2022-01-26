import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';

const ButtonGroup: React.FC<{onClickFirst: () => void, onClickSecond: () => void, disabled: boolean}> = ({onClickFirst, onClickSecond, disabled}) => {
  return (
    <div 
    className="
      flex items-center transition-all overflow-hidden duration-200 disabled:bg-gray-200 hover:bg-green-600 rounded-md 
    ">

    <button
       disabled={disabled}
       onClick={onClickFirst.bind(null)}
       className='button_item px-4'>
      <IoIosSend className="text-white text-xl" />
    </button>
  

    <button 
      disabled={disabled}
      onClick={onClickSecond.bind(null)}
      className='button_item border-opacity-60'>
      <AiFillCaretDown  className="text-white text-sm" />
    </button>
  
  </div>

  )
};

export default ButtonGroup;
