// src/components/MemeCreator.js
import React, { useState } from 'react';
import './MemeCreator.css';

const MemeCreator = ({ image }) => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [fontSize, setFontSize] = useState(24);

  const increaseFontSize = () => setFontSize(fontSize + 2);
  const decreaseFontSize = () => setFontSize(fontSize - 2);

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
      <div className="font-size-controls">
        <button onClick={decreaseFontSize}>-</button>
        <span>{fontSize}px</span>
        <button onClick={increaseFontSize}>+</button>
      </div>
      <div className="meme-image">
        <img src={image} alt="Meme" />
        <h2 className="meme-text top" style={{ fontSize: `${fontSize}px` }}>{topText}</h2>
        <h2 className="meme-text bottom" style={{ fontSize: `${fontSize}px` }}>{bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeCreator;
