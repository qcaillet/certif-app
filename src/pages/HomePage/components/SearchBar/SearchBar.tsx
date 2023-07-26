import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({
  setFilter,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
}) {
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-15" />
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
