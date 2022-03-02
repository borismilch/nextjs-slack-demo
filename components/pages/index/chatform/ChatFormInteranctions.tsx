import React, { ChangeEvent, SyntheticEvent } from 'react'
import { ChatFormActions } from '..'
import { useToggle }  from 'hooks'
import { ButtonGroup, EmojiPicker } from 'components/forms'

import { useAppSelector } from 'hooks/redux'
import { mediaSelector } from 'redux/selectors' 
import { emojies } from 'utils/mocks/emojies'

interface ChatFormInteractions {
  isButtonDisabled?: boolean
  changeValue?: (val: string) => void
  addAdressat?: () => void,
  sendMessage?: () => Promise<void>
  currentValue?: string
}

const ChatFormInteranctions: React.FC<ChatFormInteractions> = (props) => {
  const { 
    addAdressat = () => {}, 
    changeValue = () => {}, 
    isButtonDisabled = false, 
    sendMessage = () => {}, 
    currentValue = ""
  } = props
  const [open, _, toggle] = useToggle(false)

  const { files } = useAppSelector(mediaSelector)

  return (
    <div className='flex w-full relative justify-between'>

      {!(files.length > 0) && <>
        <ChatFormActions
            cb2={toggle.bind(null)}
            cb3={addAdressat.bind(null)}
        />
        
        <div 
          className={'absoluteWrapper ' + (open ? 'opacity-100 visible' : 'opacity-0 hidden')}>
          <EmojiPicker 
            emojies={emojies}
            changeValue={
              (val: string) => changeValue(currentValue + val)
            }
          />

        </div>
      </>}

      {files.length > 0 && <div></div> }

       <ButtonGroup 
          disabled={isButtonDisabled}
          onClickFirst={sendMessage.bind(null)}
          onClickSecond={() => {}}
        />
    </div>

  )
}

export default React.memo(ChatFormInteranctions)