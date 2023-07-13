import React from 'react';
import styles from './HeaderMenu.module.scss';
import { NavLink } from 'react-router-dom';
export default function HeaderMenu({ setPage }) {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <NavLink></NavLink>
      <li>
        <NavLink to="/admin"> Ajouter une recette </NavLink>
      </li>
      <li>wishList</li>
      <li>connexion</li>
    </ul>
  );
}
