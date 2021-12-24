import { API } from "./api";

const tokenKey = 'token';
const headerKey = 'Authorization';

export const checkTokenIs = () => {
	return !!getToken();
};

export const getToken = () => {
	return localStorage.getItem(tokenKey);
};

export const setToken = (token) => {
  API.defaults.headers[headerKey] = `Bearer ${token}`;
	localStorage.setItem(tokenKey, token);
};

export const deleteToken = () => {
	API.defaults.headers[headerKey] = '';
  localStorage.removeItem(tokenKey);
};
