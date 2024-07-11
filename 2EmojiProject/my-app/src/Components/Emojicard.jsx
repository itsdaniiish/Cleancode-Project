import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Emojicard = ({ emoji }) => {
  return (
    <CopyToClipboard text={emoji.symbol}>
      <div className="emoji-card">
        <span>{emoji.symbol}</span>
        <span>{emoji.title}</span>
      </div>
    </CopyToClipboard>
  );
};

export default Emojicard;

