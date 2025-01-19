// useAuth.js
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure, logout } from '../app/store/authSlice';
import axios from 'axios';

export const useAuth = () => { // Убедитесь, что хук экспортируется
    const dispatch = useDispatch();
    const { user, isAuthenticated, isLoading, error } = useSelector((state) => state.auth);

    const handleLogin = async (username, password) => {
        dispatch(loginStart());
        try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login/`, {
            username,
            password,
        }, {
            withCredentials: true,
        });
        dispatch(loginSuccess(response.data.user));
        return true;
        } catch (err) {
        dispatch(loginFailure(err.response?.data?.error || 'Ошибка при входе в систему'));
        return false;
        }
    };

    const handleLogout = async () => {
        try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/logout/`, {}, {
            withCredentials: true,
        });
        dispatch(logout());
        } catch (err) {
        console.error('Ошибка при выходе из системы:', err);
        }
    };

    return { user, isAuthenticated, isLoading, error, login: handleLogin, logout: handleLogout };
};