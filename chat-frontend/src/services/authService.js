import { API } from './api';

export const login = async (data) => {
  const res = await API.post('/login', data);
  return res.data;
};

export const register = async (data) => {
  const res = await API.post('/register', data);
  return res.data;
};

export const updateProfile = async (data) => {
  const headers = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  };

  const res = await API.post('/users/update', data, headers);
  return res.data;
};