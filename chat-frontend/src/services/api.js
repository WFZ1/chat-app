import axios from 'axios';
import { getToken } from './authTokenService';
import { logout } from '../store/auth/authSlice';

export const API = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${getToken() || ''}`
  }
});

export const initInterceptors = (store) => {
  API.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status !== 401) {
        throw err;
      }

      if (err.response.data.error.name === 'TokenExpiredError') {
        store.dispatch(logout());
        throw err;
      }
    }
  );
};
