import React, { useEffect } from 'react';
import { SidebarHeader, SidebarItems, SidebarChannels, SidebarItem } from '.'

import {addDoc, collection, DocumentData} from 'firebase/firestore'
import { firestore } from '@/lib/firebase';

import {HiHashtag, HiPlusSm} from 'react-icons/hi'

import { useCollection } from 'react-firebase-hooks/firestore'
import { ISidebarItem } from '@/models/.';
import { useState } from 'react'

const Sidebar = () => {

  const [channels, laoding, error] = useCollection(collection(firestore, 'rooms'))
  const [myChannels, setMyChannels] = useState<ISidebarItem[]>([])

  const AddChannel = async () => {
    const channelName = prompt('Please, enter channel name')

    if (!channelName) { return }  
      
    const docRef = collection(firestore, 'rooms')
    await addDoc(docRef, { name: channelName })
    
  }

  useEffect(() => {
    console.log(channels?.docs?.map(doc => doc.data()))

    setMyChannels(channels?.docs?.map(doc =>( {text: doc.data().name, id: doc.id} )))
  }, [channels])

  return (
    <div className='flex flex-col bg-[#3F0E40] flex-[0.3] max-w-[260px]'>
      
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
  )
};

export default Sidebar;
