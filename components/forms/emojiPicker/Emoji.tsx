import React from 'react';

interface EmojiProps {
 val: string, 
 onClick: () => void
}

const Emoji: React.FC<EmojiProps> = (props) => {
  const { onClick, val } = props
  return (
    <div data-testid="emoji" onClick={onClick.bind(null)}>
      <p className='emoji'>
        {val}
      </p>
    </div>
  )
};

export default Emoji;
