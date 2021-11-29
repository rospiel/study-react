import React, { useCallback } from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const urlLocation = useLocation();

  const chooseTitle = useCallback(() => {
    const { pathname } = urlLocation;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;

      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;

      default:
        setTitle('Minha Conta');
    }
  }, [urlLocation]);

  React.useEffect(() => {
    chooseTitle();
  }, [chooseTitle]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
