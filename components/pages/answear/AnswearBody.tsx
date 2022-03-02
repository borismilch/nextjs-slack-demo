import {IMessage} from 'models/.';
import React from 'react';

import { ChatForm, Message } from '../index';

interface AnswearBodyProps {
  message: IMessage
  answears: IMessage[]
}

const AswearBody: React.FC<AnswearBodyProps> = (props) => {
  const { answears, message } = props

  return (
    <div className='flex flex-col'>

      <div className='border-bray-400 mb-2 border-b'>
        <Message 
          showAnswears={false}
          message={message}
        />
      </div>

      <div className='flex flex-col mx-3'>
        {
          answears?.map(item => (
            <Message 
              key={item.id} 
              isAnswear 
              showAnswears={false} 
              message={item} 
            />
          ))
        }
      </div>

      <ChatForm updateId={message.id} />
      
    </div>
  )
};

export default AswearBody
