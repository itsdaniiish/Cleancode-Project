import React from 'react';
import EmojiCard from './Emojicard';

const Emojilist = ({ emojis }) => {
  return (
    <div className="emoji-list">
      {emojis.map((emoji, index) => (
        <EmojiCard key={index} emoji={emoji} />
      ))}
    </div>
  );
};

export default Emojilist;
