import React, { SyntheticEvent } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { imagesSelector, selectedImageIndexSelector } from 'redux/selectors'
import { GallerySliceActions } from 'redux/actions'; 

import { SliderButton, SliderSlide } from '.';

const Slider = () => {
  const dispatch = useAppDispatch()

  const selectedImageIndex = useAppSelector(selectedImageIndexSelector)
  const galleryImages = useAppSelector(imagesSelector)

  const increment = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(GallerySliceActions.incrementImage())
  }

  const decrement = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(GallerySliceActions.decrementImage())
  }

  const clearData = () => {
    dispatch(GallerySliceActions.clearData())
  }

  return (
    <div
      data-testid="slider"
      onClick={clearData.bind(null)}
       className='gallery_wrapper'>

      <div className='flex items-center justify-center md:gap-4'> 

        <SliderButton 
          isDisabled={selectedImageIndex === 0}
          onClick={decrement.bind(null)}
        >
          <FiChevronLeft />
        </SliderButton>
        {  
          galleryImages.slice().map((item, idx) => (
            <SliderSlide idx={idx} item={item} />
   
          ))
        }
       
        <SliderButton 
          isDisabled={selectedImageIndex === galleryImages.length - 1}
          onClick={increment.bind(null)}
        >
          <FiChevronRight />
        </SliderButton>

      </div>

    </div>
  )
};

export default Slider

