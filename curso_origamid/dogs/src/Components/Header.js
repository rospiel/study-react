import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  function getLinkMyAccount() {
    return (
      <Link className={styles.login} to="/conta">
        {data.nome}
        <button onClick={userLogout}>Sair</button>
      </Link>
    );
  }

  function getLinkLogin() {
    return (
      <Link className={styles.login} to="/login">
        Login / Criar
      </Link>
    );
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? getLinkMyAccount() : getLinkLogin()}
      </nav>
    </header>
  );
};

export default Header;
