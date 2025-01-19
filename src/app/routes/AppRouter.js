// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../layout/HomePage';
import LoginPage from '../layout/LoginPage';
import RegisterPage from '../layout/RegisterPage';
import Nav from '../shared/components/Navigation';

const AppRouter = () => {
  return (
    <Router>
      <Nav /> {/* Навигация */}
      <Routes>
        {/* Главная страница доступна всем */}
        <Route path="/" element={<HomePage />} />

        {/* Страница входа доступна всем */}
        <Route path="/login" element={<LoginPage />} />

        {/* Страница регистрации доступна всем */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Редирект для несуществующих маршрутов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;