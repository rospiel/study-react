import React from 'react';
import styles from './UserHeaderNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function buildButtonMobile() {
    return !mobile ? null : (
      <button
        aria-label="Menu"
        className={`${styles.mobileButton} ${
          isMobileMenu() && styles.mobileButtonActive
        }`}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></button>
    );
  }

  function isMobileMenu() {
    return mobileMenu;
  }

  function isMobile(mobileText) {
    return mobile && mobileText;
  }

  function applyStylesNav() {
    return ` ${mobile ? styles.navMobile : styles.nav} ${
      isMobileMenu() && styles.navMobileActive
    }`;
  }

  return (
    <>
      {buildButtonMobile()}
      <nav className={applyStylesNav()}>
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
    </>
  );
};

export default UserHeaderNav;
