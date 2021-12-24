const userKey = 'user';

export const getUser = () => {
	return localStorage.getItem(userKey);
};

export const setUser = (user) => {
  localStorage.setItem(userKey, JSON.stringify(user));
};

export const deleteUser = () => {
	localStorage.removeItem(userKey);
};
