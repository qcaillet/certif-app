import React from 'react';
import styles from './Loader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

function Loader() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center flex-fill">
      {' '}
      <FontAwesomeIcon className={styles.loader} icon={faCookieBite} />
    </div>
  );
}

export default Loader;
