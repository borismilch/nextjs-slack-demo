import React from 'react';
import {BiChevronDown} from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import { firestore } from 'lib/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'

import { IRoom } from 'models';

interface SidebarHeaderProps {
  sendMessage: (rooms: IRoom[]) => Promise<void> 
}

const SidebarHeader: React.FC<SidebarHeaderProps> = (props) => {
  const { sendMessage } = props
  const [rooms] = useCollection(collection(firestore, 'rooms'))

  return (
    <div className='sidebarHeaderWrapper'>

      <h1 className="text-xl truncate text-white font-bold">
        Новое рабочее пространство
      </h1>

      <BiChevronDown className="text-white text-3xl" />

      <div 
        data-testid="pencil"
        onClick={sendMessage.bind(null, rooms)}
        className="edit_wrapper">

        <BsPencilSquare />

      </div>

    </div>
  )
};

export default SidebarHeader
