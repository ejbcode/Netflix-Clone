import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  api_key: API_KEY,
});

export default axiosClient;
