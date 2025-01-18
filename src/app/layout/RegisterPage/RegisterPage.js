import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.password2) {
            setMessage('Пароли не совпадают.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: FormData.email,
                    password: FormData.password,
                    password2: FormData.password2,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Регистрация прошла успешно!');
            } else {
                setMessage(data.error || 'Ошибка при регистрации.');
            }
        } catch (error) {
            setMessage('Ошибка при отправке запроса.');
        }
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleChange}>
                <div>
                    <label>Имя пользователя:</label>
                    <input
                        type="text"
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
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
                <div>
                    <label>Подтвердите пароль:</label>
                    <input
                        type="password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit'>Зарегистрироваться</button>
            </form>
            {message && <p>{message}</p>} 
        </div>
    );
};

export default Register;