import React, { useState } from 'react';
import styles from '../header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cookingMaster from '../../assets/images/cookingMaster.png';
import HeaderMenu from '../header/components/HeaderMenu/HeaderMenu';
import { NavLink } from 'react-router-dom';
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`${styles.header} d-flex flex-row align-items-center`}>
      <FontAwesomeIcon className="mr-15" icon="fa-solid fa-bars" />
      <div className="flex-fill">
        <NavLink to="/">
          <img src={cookingMaster} alt="logo cookingMaster" />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="/admin">
          <button className="btn btn-primary mr-15">Admin</button>
        </NavLink>

        <button className="mr-5 btn btn-reverse-primary">
          <FontAwesomeIcon className="mr-5" icon="fa-solid fa-heart" />
          <span>wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <span onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon className={styles.headerXs} icon="fa-solid fa-bars" />
      </span>
      {showMenu && (
        <>
          {' '}
          <div onClick={() => setShowMenu(false)} className="calc"></div>{' '}
          <HeaderMenu />{' '}
        </>
      )}
    </div>
  );
}

export default Header;
