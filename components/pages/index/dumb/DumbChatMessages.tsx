import { Slider } from 'components/Layout/slider'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { IMessage } from 'models'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { SidebarSliceActions } from 'redux/actions'
import { imagesSelector, roomIdSelector } from 'redux/selectors'
import { Message } from '..'

interface DumbChatMessagesProps {
  loading: boolean,
  messages: IMessage[]
}

const DumbChatMessages: React.FC<DumbChatMessagesProps> = (props) => {
  const { loading, messages } = props

  const boxRef = useRef<HTMLDivElement>(null) 
  const images = useAppSelector(imagesSelector)
  const roomId = useAppSelector(roomIdSelector)
  
  const dispatch = useAppDispatch()
  
  if (loading) { return <p>Loading...</p> }

  useEffect(() => {
    dispatch(SidebarSliceActions.changeOpen())
  }, [roomId])

  useEffect(() => {
    if (boxRef && boxRef.current.scrollBy) {
      boxRef?.current?.scrollBy({
        top:100000,
        behavior: 'smooth'
      })

    }

  }, [messages])

  return (
    
    <div
     
      ref={boxRef}
      className="flex flex-col overflow-auto pb-10 scrollbar-thin max-h-[74vh]">

    {
      messages?.map((message) => (
        <Message 
          key={message.id}
          message={message}
        />
      ))
    }
      {(images.length > 0) && <Slider />}
    </div>
   
  )
}

export default DumbChatMessages