import React from 'react';
import styles from './UserHeaderNav.module.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);

  function isMobile(mobileText) {
    return mobile && mobileText;
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {isMobile('Minhas Fotos')}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {isMobile('Estatísticas')}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {isMobile('Adicionar Foto')}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {isMobile('Sair')}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
