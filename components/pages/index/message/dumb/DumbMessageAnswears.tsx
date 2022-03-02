import React from 'react'
import Image from 'next/image'
import { IMessage } from 'models'

interface DumbMessageAnswearsProps {
  answears: IMessage[]
  commentMessage: () => void
}

const DumbMessageAnswears: React.FC<DumbMessageAnswearsProps> = (props) => {
  const { answears,  commentMessage } = props

  return (
    <>
    { answears?.length > 0 &&  
     <div 
       data-testid="message_answears"
       className='flex items-center gap-1 py-2'
      >
       <div className='small_avatar'>

         <Image 
           src={answears[0].userImage}
           layout='fill'
           objectFit='cover'
           alt='ddddd'
         />

       </div>

       <p 
        data-testid="answear_link"
         onClick={commentMessage.bind(null)}
         className='answear_link'
       >{answears.length} answears</p>
     </div>}

   </>
  )
}

export default DumbMessageAnswears