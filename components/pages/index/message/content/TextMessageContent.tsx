
import { TextMessage } from 'models';
import React from 'react';

interface MessageContentProps {
  message: TextMessage
}

const MessageContent: React.FC<MessageContentProps> = ({message}) => {
  return (
      <div data-testid="text_message" className='flex flex-col '>

        <div className='flex items-center'>
          
         { message.adressat && 
            <div className='relative inline-block '>
             <p className='marker'>@{message.adressat}</p>

             <span className='tooltip tooltip-top -left-1 z-40'>
                {'For ' + message.adressat}
             </span>

           </div>
         }

          <p className='text-sm font-medium'>{message.body}</p>
        </div>

      </div>
  )
};

export default MessageContent;
