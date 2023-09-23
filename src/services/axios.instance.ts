import axios from 'axios';
import AuthService from './auth.service';

const axiosService = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
});

axiosService.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  error => Promise.reject(error)
);

axiosService.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      const username = AuthService.me();

      if (window.location.pathname === '/' + username) window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosService;
