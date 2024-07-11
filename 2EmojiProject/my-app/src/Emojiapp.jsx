import React, { useState } from 'react';
import EmojiSearch from './Components/Emojisearch';
import EmojiList from './Components/Emojilist';
import emojiData from './emojidata.json';

const Emojiapp = () => {
  const [filteredEmojis, setFilteredEmojis] = useState(emojiData);

  const handleSearch = (query) => {
    const filtered = emojiData.filter(emoji => 
      emoji.title.toLowerCase().includes(query.toLowerCase()) ||
      emoji.symbol.includes(query)
    );
    setFilteredEmojis(filtered);
  };

  return (
    <div className="emoji-app">
      <h1>Emoji Search</h1>
      <EmojiSearch onSearch={handleSearch} />
      <EmojiList emojis={filteredEmojis} />
    </div>
  );
};

export default Emojiapp;
