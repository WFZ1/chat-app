import { createSlice } from '@reduxjs/toolkit';
import { checkTokenIs, getToken } from '../../services/authTokenService';
import { getUser } from '../../services/userService';
import { login, register, updateProfile } from './thunk';

const initialState = {
	user: JSON.parse(getUser()) || {},
	token: getToken() || '',
	isLoggedIn: !!checkTokenIs()
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = {};
			state.token = '';
			state.isLoggedIn = false;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
			})
			.addCase(updateProfile.fulfilled, (state, { payload }) => {
				state.user = payload;
			})
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
