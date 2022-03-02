import React from 'react';
import { IReaction } from 'models/.';

interface MessageReactionsProps {
  reactions: IReaction[]
}

const MessageReactions: React.FC<MessageReactionsProps> = ({reactions}) => {

  return (
    <div className='flex items-center gap-1'>
      {
        reactions?.map(reation => (
          <div 
            data-testid="reaction"
            className='border-blue-600 border text-xs px-1 rounded-sm mt-1 bg-blue-200'
            key={reation.id}
          >
            {reation.body}
          </div>
        ))
      }
    </div>
  )
};

export default MessageReactions;
