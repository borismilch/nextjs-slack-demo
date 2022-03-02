import React from 'react';
import Image from 'next/image'

import { ImageMessage } from 'models/chat/Imessage';
import { useAppDispatch } from 'hooks/redux';
import { GallerySliceActions } from 'redux/actions'

interface ViewImageProps {
  message: ImageMessage
}

const ViewImage: React.FC<ViewImageProps> = ({message}) => {
  const dispatch = useAppDispatch()

  const selectForStore = (idx: number) => {
    dispatch(GallerySliceActions.setImages(message.body))
    dispatch(GallerySliceActions.setCurrentImage(idx))
  }

  return (
    <div
      data-testid="image_message"
       className='flex flex-wrap gap-1 mt-3  relative w-[260px] h-[130px]'>

      {
        message.body.slice(0, 4).map((image, idx) => (
          <div  
            data-testid="message_image"
            onClick={selectForStore.bind(null, idx)}
            key={image.id}
            className='message_img'
          >
            <Image
              alt={image.url}
              src={image.url}
              key={image.id}
              layout='fill'
              objectFit='cover'
            />

           { 
            idx === 3 && message.body.length > 4 && 
             <div className='
              absolute bg-transparent inset-0 flex hover:opacity-60 items-center justify-center
             '>
              <p className='text-white text-2xl font-medium'>+{message.body.length - 4}</p>
            </div>
           }
          </div>
        ))
      }

    </div>
  )
};

export default ViewImage
