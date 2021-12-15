import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from '../../services/authService';

export const login = createAsyncThunk('auth/login', async (data) => {
	return await authService.login(data);
});

export const register = createAsyncThunk('auth/register', async (data) => {
	return await authService.register(data);
});
