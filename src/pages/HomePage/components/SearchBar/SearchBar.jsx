import React from 'react';
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar({ setFilter }) {
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
    >
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="mr-15" />
      <input
        onInput={handleInput}
        className="flex-fill"
        type="text"
        placeholder="rechercher"
      />
    </div>
  );
}

export default SearchBar;
