import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import App from './App';

// Создаем корневой элемент
const root = createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);