import { DropList } from 'components/forms'

import dynamic from 'next/dynamic'

import AppIcon from 'components/icons/AppIcon'
import { useToggle } from 'hooks'
import React from 'react'
import { BsFillChatRightTextFill, BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineAddReaction } from 'react-icons/md'
import { emojies } from 'utils/mocks/emojies'
import { useAppSelector } from 'hooks/redux'
import { userSelector } from 'redux/selectors' 
import { IDropItem, IMessage } from 'models'

interface DumbMessageProps {
  reactionItems?: string[],
  addReaction?: (val: string) => void,
  commentMessage?: () => void,
  changeValue?: (val: string) => void,
  message?: IMessage,
  dropItems?: IDropItem[]

}

const DumbMessageIcons: React.FC<DumbMessageProps> = (props) => {
  const { 
    addReaction = () => {}, 
    changeValue = () => {}, 
    commentMessage = () => {}, 
    reactionItems = [],
    message = {} as IMessage,
    dropItems = []
  } = props
  
  const user = useAppSelector(userSelector)

  const [open, changeOpen] = useToggle(false)
  const [openMune, setOpenMenu] = useToggle(false)
  const EmojiPicker = dynamic(() => import('components/forms/emojiPicker/EmojiPicjker'))

  return (
    <>
     <div 
      className="flex bg-white  relative drop-shadow-md rounded-full items-center p-1">

      {
        reactionItems.map((item, index) => (
          <AppIcon 
            key={index}
            Icon={ <p className="text-lg">{item}</p> }
            classes='p-1'
            onClick={() => addReaction(item)}
          />
        ))
      }

      <AppIcon 
        Icon={<MdOutlineAddReaction className='text-lg text-gray-500'  />}
        text='reactions'
        classes='text-xs p-1'
        onClick={changeOpen.bind(null, !open)}
      />

        { open &&
          <div data-testid="emojies" className={'droplist_wrapper '}>
            <EmojiPicker 
             emojies={emojies}
             changeValue={changeValue}
            />
          </div>
        }

      <div onClick={commentMessage.bind(null)}>
        <AppIcon 
          Icon={<BsFillChatRightTextFill className='text-sm text-gray-500'  />}
          text='answear'
          classes='text-xs p-1'
        />
      </div>

      { user?.uid === message?.userId && <>
       <div className='relative'>  

        <AppIcon 
          Icon={<BsThreeDotsVertical className='text-xl text-gray-500'  />}
          classes='text-xs p-1'
          onClick={setOpenMenu.bind(null, prev => !prev)}
        />

        </div>

        {openMune && <div onMouseLeave={setOpenMenu.bind(null, false)} className="absotute">
          <DropList
            onClose={setOpenMenu.bind(null, false)} 
            dropItems={dropItems}
          />
        </div>}
      </>}

    </div> 
    </>
  )
}

export default DumbMessageIcons