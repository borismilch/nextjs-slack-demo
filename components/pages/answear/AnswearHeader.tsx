import React from 'react';

import AppIcon, { MdOutlineClose } from 'components/icons'
import { useAppDispatch } from 'hooks/redux';
import { AnswearSliceActions } from 'redux/actions';import { IRoom } from 'models';

interface AnswearHeaderProps {
  room: IRoom
}

const AswearHeader: React.FC<AnswearHeaderProps> = (props) => {

  const { room } = props
  const dispatch = useAppDispatch()
  
  const clearMessageComment = () => {
    dispatch(AnswearSliceActions.cleanMesageComment())
  }

  return (
    <div className='flex items-center gap-2 p-3 border-b border-gray-400'>

      <h3 className='text-xl font-bold'>
      Обсуждение
      </h3>

      <p className='flex-grow'>#{room?.name}</p>

      <div onClick={clearMessageComment.bind(null)}>
        <AppIcon 
          Icon={<MdOutlineClose className='text-xl text-gray-600'/>}
          classes='rounded-md'
          tooltip={['Close', 'tooltip-bottom -left-1']}  
        />
      </div>

    </div>
  )
};

export default AswearHeader
