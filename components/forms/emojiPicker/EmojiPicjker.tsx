import React from 'react';
import { Emoji } from '..'

interface EmojiPickerProps {
  changeValue: (val: string) => void,
  emojies: string[]
}

const EmojiPicker: React.FC<EmojiPickerProps> = (props) => {

  const {changeValue, emojies} = props

  return (
    <div className="emoji_picker_wrapper">
      {
        emojies.map(item => (
          <Emoji 
            key={item}
            val={item}
            onClick={changeValue.bind(null, item)}
          />
        ))
      }

    </div>
  )
};

export default EmojiPicker;
