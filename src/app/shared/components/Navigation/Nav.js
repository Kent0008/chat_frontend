// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';

const Nav = () => {
  const { isAuthenticated, logout } = useAuth(); // Получаем функцию logout

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Главная</Link>
        </li>
        {isAuthenticated ? ( // Если пользователь авторизован
          <li style={styles.li}>
            <button onClick={logout} style={styles.button}>Выйти</button> {/* Кнопка выхода */}
          </li>
        ) : ( // Если пользователь не авторизован
          <>
            <li style={styles.li}>
              <Link to="/login" style={styles.link}>Вход</Link>
            </li>
            <li style={styles.li}>
              <Link to="/register" style={styles.link}>Регистрация</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

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
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default Nav;