// src/App.js
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import MemeList from './Components/MemeList';
import MemeUpload from './Components/MemeUpload';
import MemeCreator from './Components/MemeCreator';
import { searchMemes } from './Services/MemeService';

const App = () => {
  const [memes, setMemes] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSearch = async (query) => {
    const result = await searchMemes(query);
    setMemes(result);
  };

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MemeList memes={memes} />
      <MemeUpload onUpload={handleUpload} />
      {uploadedImage && <MemeCreator image={uploadedImage} />}
    </div>
  );
};

export default App;
