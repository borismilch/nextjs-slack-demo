import React, { useCallback, useEffect } from 'react';
import { SidebarHeader, SidebarItems, SidebarChannels, SidebarItem } from '.'

import {addDoc, collection} from 'firebase/firestore'
import { firestore } from 'lib/firebase';
import {HiPlusSm} from 'react-icons/hi'
import { useCollection } from 'react-firebase-hooks/firestore'
import { IRoom, ISidebarItem, TextMessage } from 'models/.';
import { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { sidebarOpenSelector } from 'redux/selectors'
import { SidebarSliceActions } from 'redux/actions';
import { MessageService } from 'services';
import { userSelector } from 'redux/selectors';

const Sidebar = () => {

  const [channels] = useCollection(collection(firestore, 'rooms'))
  const [myChannels, setMyChannels] = useState<ISidebarItem[]>([])

  const sidebarOpen = useAppSelector(sidebarOpenSelector)
  const dispatch = useAppDispatch()
  const user = useAppSelector(userSelector)

  const AddChannel = async () => {
    const channelName = prompt('Please, enter channel name')

    if (!channelName) { return }  
      
    const docRef = collection(firestore, 'rooms')
    await addDoc(docRef, { name: channelName })
  }

  const closeSidebar = () => {
    dispatch(SidebarSliceActions.changeOpen(false))
  }

  const sendMessageForChosen = useCallback(
    async (rooms: IRoom[]) => await MessageService.sendMessageDirectly(rooms, user)
  ,[])

  useEffect(() => {
    setMyChannels(channels?.docs?.
      map(doc =>( {text: doc.data().name, id: doc.id} ))
    )
  }, [channels])

  return (
    <>
    <div className={'sidebar ' + (sidebarOpen && 'transform translate-x-0')}>

    <SidebarHeader sendMessage = {sendMessageForChosen} />

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

    { sidebarOpen && <div 
      onClick={closeSidebar.bind(null)}
      className='overlay_lay'/>
    }

    </>
  )
};

export default Sidebar
