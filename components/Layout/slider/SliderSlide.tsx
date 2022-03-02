import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { IMage } from 'models'
import { useAppSelector } from 'hooks/redux'
import { selectedImageIndexSelector } from 'redux/selectors'

interface SliderSlideProps {
  item: IMage
  idx: number
}

const SliderSlide: React.FC<SliderSlideProps> = (props) => {

  const { item , idx} = props

  const selectedImageIndex = useAppSelector(selectedImageIndexSelector)

  const opacity = selectedImageIndex === idx ? 1 : 0
  const isIndex = selectedImageIndex === idx

  return (
    <div  
     
      className='inline-block  max-w-screen'
      key={item.url}
    >
      <AnimatePresence>
        {<img  
         data-testid="slider_image"
          src={item.url}
          className={
            'absolute opacity-0 md:w-auto w-[320px]  max-w-screen ' + (isIndex && "relative opacity-100 visible")}
          style={{opacity}}
        />}
      </AnimatePresence>
    </div>
  )
}

export default SliderSlide