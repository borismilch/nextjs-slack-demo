import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';

interface ButtonGroupProps {
  onClickFirst: () => void, 
  onClickSecond: () => void, 
  disabled: boolean
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {

  const {onClickFirst, onClickSecond, disabled} = props

  return (
    <div 
    className="button_group">

    <button
      data-testid="first"
       disabled={disabled}
       onClick={(e) => {e.preventDefault(); onClickFirst()}}
       className='button_item px-4'>
      <IoIosSend className="text-white text-xl" />
    </button>

    <button 
      data-testid="second"
      disabled={disabled}
      onClick={onClickSecond.bind(null)}
      className='button_item border-opacity-60 md:flex hidden'>
      <AiFillCaretDown  className="text-white text-sm" />
    </button>
  
  </div>

  )
};

export default ButtonGroup;
