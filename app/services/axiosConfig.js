import axios from 'axios';

const api = axios.create({
  baseURL: 'https://paw-connect-back.onrender.com/api/',
});

//!TODO : Coder un intercepteur (request) pour ajouter le token a chaque request quand il existe. (Regarder intercepteur response)

export default api;
