import { IVideoMessage } from 'models/chat/Imessage';
import React from 'react';

interface VideoMessageContentProps {
  message: IVideoMessage
}

const VideoMessageContent: React.FC<VideoMessageContentProps> = ({message}) => {
  return (
    <div data-testid="video_message" className='relative w-[270px] h-[150px]'>

      <video 
        src={message.body.url} 
        className='w-full h-full mt=1 rounded-lg drop-shadow-md hover:brightness-90 transition-all duration-200' 
        controls
      />

    </div>
  )
};

export default VideoMessageContent;
