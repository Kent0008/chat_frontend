import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <Link to="/" style={styles.link}>Главная</Link>
                </li>
                <li style={styles.li}>
                    <Link to="/login" style={styles.link}>Вход</Link>
                </li>
                <li style={styles.li}>
                    <Link to="/register" style={styles.link}>Регистрация</Link>
                </li>
            </ul>
        </nav>
    );
};

// Стили для навигации (можно вынести в отдельный файл, если используете CSS)
const styles = {
    nav: {
        backgroundColor: '#333',
        padding: '10px',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    li: {
        margin: '0 15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Nav;