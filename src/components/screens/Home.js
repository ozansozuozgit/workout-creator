import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { auth } from '../../firebase';

function Home() {
 
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <button onClick={()=>auth.signOut()}>Sign out</button>
    </div>
  );
}

export default Home;
