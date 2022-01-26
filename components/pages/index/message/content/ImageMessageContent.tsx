import React from 'react';
import { observer } from 'mobx-react-lite'
import Image from 'next/image'

import { GalleryStore } from '@/store/.'

import { ImageMessage } from '@/models/chat/Imessage';

const ViewImage: React.FC<{message: ImageMessage}> = ({message}) => {

  const selectForStore = (idx: number) => {
    console.log(idx)
    GalleryStore.setImages(message.body)
    GalleryStore.setCurrentImage(idx)
    console.log(GalleryStore.images.slice())
  }

  return (
    <div className='flex flex-wrap gap-1 mt-3  relative w-[260px] h-[130px]'>

      {
        message.body.slice(0, 4).map((image, idx) => (
          <div  
            onClick={selectForStore.bind(null, idx)}
            className='message_img'>
            <Image
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

export default observer(ViewImage);
