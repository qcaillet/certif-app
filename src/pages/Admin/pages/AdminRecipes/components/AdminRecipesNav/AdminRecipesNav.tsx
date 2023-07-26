import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AdminRecipesNav.module.scss';
function AdminRecipesNav() {
  return (
    <ul className={styles.list}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to="list"
      >
        List des recettes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to="new"
      >
        Ajouter une recettes
      </NavLink>
    </ul>
  );
}

export default AdminRecipesNav;
