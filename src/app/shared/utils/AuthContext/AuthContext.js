import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const AuthContext = createContext();

// Провайдер для контекста
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Состояние пользователя

  // Функция для входа
  const login = (userData) => {
    setUser(userData);  // Устанавливаем данные пользователя
  };

  // Функция для выхода
  const logout = () => {
    setUser(null);  // Очищаем данные пользователя
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = () => useContext(AuthContext);