import AppIcon from 'components/icons/AppIcon'
import { IUser } from 'models'
import Image from 'next/image'
import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'

interface HeaderUserProps {
  user: IUser
  signOut: () => Promise<void>
}

const HeaderUser: React.FC<HeaderUserProps> = (props) => {

  const { signOut, user } = props

  return (
    <div>
      <div className ="justify-self-end justify-end  flex-grow  flex items-center ">

        <AppIcon 
          Icon={<BiSearchAlt2 className='text-xl text-white font-semibold' />}
          classes='rounded-[50%] hover:bg-transparent md:hidden pr-0'
        />

        <AppIcon 
          Icon={
            <AiOutlineQuestionCircle 
              className='text-xl text-white mr-2 font-semibold' 
            />}
          classes='rounded-[50%] hover:bg-transparent pr-0 pl-1'
        />

        <div 
          data-testid="avatar"
          onClick={signOut.bind(null)}
          className="brigth_avatar ">
          { user?.photoURL && 
              (<Image 
                src={user?.photoURL}
                layout='fill'
                objectFit={"cover"}
              />)
          }
        </div>

        </div>

    </div>
  )
}

export default HeaderUser