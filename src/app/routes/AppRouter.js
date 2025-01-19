// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../layout/HomePage';
import LoginPage from '../layout/LoginPage';
import RegisterPage from '../layout/RegisterPage';
import Nav from '../shared/components/Navigation';

const AppRouter = () => {
    return (
        <Router>
            <Nav /> {/* Добавляем навигацию здесь */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;