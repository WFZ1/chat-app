import { API } from './api';

export const authService = {
  login: async (data) => {
    const res = await API.post('/login', data);
    API.defaults.headers['Authorization'] = `Bearer ${data.token}`;
    return res;
  },

  register: async (data) => {

  },

  logout: async () => {

  }
};