import { API } from './api';

export const login = async (data) => {
  const res = await API.post('/login', data);
  API.defaults.headers['Authorization'] = `Bearer ${res.token}`;
  
  return res.data;
};

export const register = async (data) => {
  const res = await API.post('/register', data);
  API.defaults.headers['Authorization'] = `Bearer ${res.token}`;
  
  return res.data;
};

export const logout = async () => {

};