// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        loginStart: (state) => {
        state.isLoading = true;
        state.error = null;
        },
        loginSuccess: (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        },
        loginFailure: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        },
        logout: (state) => {
        state.user = null;
        state.isAuthenticated = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;