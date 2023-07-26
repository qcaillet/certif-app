import React, { useState } from 'react';
import styles from '../header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cookingMaster from '../../assets/images/cookingMaster.png';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { NavLink } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { wishlistDisplayState } from 'state';
import { useLocation } from 'react-router-dom';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const setWishListDisplay = useSetRecoilState(wishlistDisplayState);
  const location = useLocation();

  return (
    <div className={`${styles.header} d-flex flex-row align-items-center`}>
      <FontAwesomeIcon className="mr-15" icon={faBars} />
      <div className="flex-fill">
        <NavLink to="/">
          <img src={cookingMaster} alt="logo cookingMaster" />
        </NavLink>
      </div>
      <ul className={styles.headerList}>
        <NavLink to="/admin">
          <button className="btn btn-primary mr-15">Admin</button>
        </NavLink>
        {!location.pathname.includes('admin') && (
          <button
            onClick={() => setWishListDisplay(true)}
            className="mr-5 btn btn-reverse-primary"
          >
            <FontAwesomeIcon className="mr-5" icon={faHeart} />
            <span>wishlist</span>
          </button>
        )}
      </ul>
      <span onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon className={styles.headerXs} icon={faBars} />
      </span>
      {showMenu && (
        <>
          {' '}
          <div onClick={() => setShowMenu(false)} className="calc"></div>{' '}
          <HeaderMenu
            displayWishList={() => setWishListDisplay(true)}
            hideMenu={() => setShowMenu(false)}
          />{' '}
        </>
      )}
    </div>
  );
}

export default Header;
