import React from 'react';
import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
export default function HeaderMenu({ displayWishList, hideMenu }) {
  return (
    <ul onClick={hideMenu} className={`${styles.MenuContainer} card p-20`}>
      <NavLink></NavLink>
      <li>
        <NavLink to="/admin"> Admin </NavLink>
      </li>
      <li onClick={displayWishList}>wishList</li>
    </ul>
  );
}
