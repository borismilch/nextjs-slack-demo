import { useInputValue } from 'hooks'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

const HeaderSearch: React.FC = () => {

  const [value, bind] = useInputValue('')

  return (
    <div 
      className='header_search_wrapper '>
      <div className='text-white text-xl'>
        <BiSearchAlt2 />
      </div>

      <input
        data-testid="search"
        {...bind}
        type="text" 
       
        className='header_search_input' 
        placeholder="Placehode r..."
      />
    </div>
  )
}

export default HeaderSearch