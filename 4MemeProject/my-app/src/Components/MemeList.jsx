// src/components/MemeList.js
import React from 'react';
import './MemeList.css';

const MemeList = ({ memes }) => {
  return (
    <div className="meme-list">
      {memes.map((meme) => (
        <img key={meme.id} src={meme.url} alt={meme.name} />
      ))}
    </div>
  );
};

export default MemeList;
