import React, { SyntheticEvent, useEffect } from 'react';
import Image from 'next/image'
import { observer } from 'mobx-react-lite'

import { GalleryStore } from '@/store/.'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import ReactDom from 'react-dom'

import {AnimatePresence, motion} from 'framer-motion'

const Slider = () => {

  const increment = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    GalleryStore.incrementImage()
  }

  const decrement = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    GalleryStore.decrementImage()
  }

  useEffect(() => {
    console.log('changed')
  }, [GalleryStore.selectedImage, GalleryStore.images])

  return (
    <div
      onClick={() => GalleryStore.clearData()}
       className='flex z-[1000] fixed inset-0 items-center justify-center bg-black bg-opacity-60'>

      <div className='flex items-center justify-center gap-4'> 

        <button
          disabled={GalleryStore.selectedImage === 0}
          onClick={decrement.bind(null)}
          className='round_button'>
          <FiChevronLeft />
        </button>  
        
        {  
          GalleryStore.images.slice().map((item, idx) => (

            <div className='inline-block'>
                <AnimatePresence>
                 {<img
                    key={item.url}
                    src={item.url}
                    className={'absolute opacity-0 ' + (GalleryStore.selectedImage === idx && "relative opacity-100 visible")}
                    style={{opacity: GalleryStore.selectedImage === idx ? 1 : 0}}
                  />}
                </AnimatePresence>
            </div>

          ))
        }

        <button 
          disabled={GalleryStore.selectedImage === GalleryStore.images.length - 1}
          onClick={increment.bind(null)}
          className='round_button'>
          <FiChevronRight />
        </button>

      </div>

    </div>
  )
};

export default observer(Slider)
