import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://193.203.167.24:3001/', 
});

export default api;

