import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHeaders } from '../../shared/utils/header/headers';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login/`, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
                credentials: 'include',
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Вход выполнен успешно!');
                navigate('/');
            } else {
                setMessage(data.error || 'Ошибка при входе.');
            }
        } catch (error) {
            setMessage('Ошибка при отправке запроса.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя пользователя:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default LoginPage;