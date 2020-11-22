import React from 'react';
import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.lds_facebook}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
