import { IRoom } from 'models'
import React from 'react'
import { ChatForm, ChatHeader, ChatMessages } from '..'

interface DumbChatProps {
  room: IRoom,
  loading: boolean
}

const DumbChat: React.FC<DumbChatProps> = (props) => {

  const { room, loading } = props

  return (
    <div className='flex flex-col w-screen relative'>

    <ChatHeader room={{name: room?.name}} />

    <div className='flex-grow'>
      { loading ? <p>Loading...</p> : (
        <ChatMessages />
      )}
    </div>

    {!loading && 
      <div data-testid="form" className='absolute bottom-0 w-full'>
        <ChatForm />
      </div>
    }

  </div>
  )
}

export default DumbChat