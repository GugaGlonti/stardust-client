import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000,
});

axiosService.interceptors.request.use(
  config => {
    console.log('here2');
    const token = localStorage.getItem('token');
    console.log(token);
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
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

export default axiosService;
