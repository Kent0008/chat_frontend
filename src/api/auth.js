import axios from 'axios';

// Настройка базового URL
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
});

// Функция для выхода из системы
export const logout = async () => {
    try {
        const response = await apiClient.post('/logout/');
        return response.data;
    } catch (error) {
        console.error('Ошибка при выходе из системы:', error);
        throw error;
    }
};