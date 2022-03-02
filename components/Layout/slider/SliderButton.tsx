import React from 'react'

interface SliderButtonProps {
  isDisabled: boolean,
  onClick: () => void
}

const SliderButton: React.FC<SliderButtonProps> = (props) => {
  
  const { isDisabled, onClick, children } = props

  return (
    <button 
      disabled={isDisabled}
      onClick={onClick}
      data-testid="slider_button"
      className='round_button absolute left-4 md:relative z-20'
    >
     {children}
    </button>
  )
}

export default SliderButton