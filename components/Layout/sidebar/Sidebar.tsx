import React, { useEffect } from 'react';
import { SidebarHeader, SidebarItems, SidebarChannels, SidebarItem } from '.'

import {addDoc, collection} from 'firebase/firestore'
import { firestore } from '@/lib/firebase';

import {HiPlusSm} from 'react-icons/hi'

import { observer } from 'mobx-react-lite'

import { useCollection } from 'react-firebase-hooks/firestore'
import { ISidebarItem } from '@/models/.';
import { useState } from 'react'
import {SidebarStore} from '@/store/.';

const Sidebar = () => {

  const [channels, laoding, error] = useCollection(collection(firestore, 'rooms'))
  const [myChannels, setMyChannels] = useState<ISidebarItem[]>([])

  const AddChannel = async () => {
    const channelName = prompt('Please, enter channel name')

    if (!channelName) { return }  
      
    const docRef = collection(firestore, 'rooms')
    await addDoc(docRef, { name: channelName })
    
  }

  const closeSidebar = () => {
    SidebarStore.changeOpen(false)
  }

  useEffect(() => {
    setMyChannels(channels?.docs?.map(doc =>( {text: doc.data().name, id: doc.id} )))
  }, [channels])

  return (
    <>
    <div className={'sidebar ' + (SidebarStore.open && 'transform translate-x-0')}>

      <SidebarHeader />

      <SidebarItems  />

      <SidebarChannels channels={myChannels} />
        

      <SidebarItem 
        sidebarItem={{
          text: 'Add Channel',
          onClick: AddChannel
        }} 
        Icon = {<HiPlusSm className="text-xl text-white" /> }

      />

    </div>

   { SidebarStore.open && <div 
      onClick={closeSidebar}
      className='
        inset-0 bg-black bg-opacity-60 w-screen h-screen absolute transition-all duration-300 z-30 flex md:hidden
    '/>
   }

    </>
  )
};

export default observer(Sidebar);
