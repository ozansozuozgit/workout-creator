import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <button onClick={() => auth.signOut()}>Sign out</button>
      <Link to="/workout">go to workout</Link>
    </div>
  );
}

export default Home;
