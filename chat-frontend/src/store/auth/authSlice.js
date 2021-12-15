import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './thunk';

const initialState = {
	user: {},
	token: '',
	isLoggedIn: false
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.token = payload.token;
				state.isLoggedIn = true;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.user = payload;
				state.token = payload.token;
				state.isLoggedIn = true;
			})
	},
});

export default authSlice.reducer;
