// src/components/MemeCreator.js
import React, { useState } from 'react';
import './MemeCreator.css';

const MemeCreator = ({ image }) => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  return (
    <div className="meme-creator">
      <input
        type="text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
        placeholder="Top Text"
      />
      <input
        type="text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
        placeholder="Bottom Text"
      />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={image} alt="Meme" />
        <h2 className="meme-text top">{topText}</h2>
        <h2 className="meme-text bottom">{bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeCreator;
