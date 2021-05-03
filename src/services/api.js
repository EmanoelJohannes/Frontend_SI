import axios from 'axios';

const api = axios.create({
  baseURL: 'http://legendaryteam.online:3333',
});

export default api;
