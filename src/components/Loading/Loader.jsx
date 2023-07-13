import React from 'react';
import styles from './Loader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Loader() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center flex-fill">
      {' '}
      <FontAwesomeIcon
        className={styles.loader}
        icon="fa-solid fa-cookie-bite"
      />
    </div>
  );
}

export default Loader;
