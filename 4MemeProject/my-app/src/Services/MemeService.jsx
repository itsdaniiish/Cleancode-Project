// src/services/memeService.js
import axios from 'axios';

const API_URL = 'https://api.imgflip.com';

export const searchMemes = async (query) => {
  const response = await axios.get(`${API_URL}/get_memes`);
  return response.data.data.memes.filter((meme) =>
    meme.name.toLowerCase().includes(query.toLowerCase())
  );
};
