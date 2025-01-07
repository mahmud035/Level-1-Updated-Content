import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Allow cookies to be sent
  timeout: 10000,
});

export default axiosInstance;