import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store/store';

// Находим корневой элемент
const container = document.getElementById('root');

// Создаём корневой элемент
const root = createRoot(container);

// Рендерим приложение с использованием Provider
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);