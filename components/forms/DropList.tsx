import { IDropItem } from 'models';
import React from 'react';

interface DropListProps {
  dropItems: IDropItem[], 
  onClose: () => void
}

const DropList: React.FC<DropListProps> = (props) => {

  const {dropItems, onClose} = props

  return (
    <div 
      data-testid="droplist"
      onClick={onClose.bind(null)}
      className='white_overlay'>
      {
        dropItems.map(item => (
          <div
            key={item.id}
            onClick={item.onClick.bind(null)}
            className="
              p-2 transition-all 
              text-gray-600 duration-300 
              cursor-pointer hover:bg-gray-100
            ">
              {item.text}
          </div>
        ))
      }
    </div>
  )
};

export default DropList;
