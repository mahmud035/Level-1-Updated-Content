import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true, // Allow cookies to be sent
  timeout: 10000,
});

export default axiosInstance;
