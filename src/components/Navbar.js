import React from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ user }) {
  return (
    <div className={styles.container}>
      <h2>{user.email}</h2>
      <Link to="/workout">Create Workout</Link>{' '}
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}

export default Navbar;
