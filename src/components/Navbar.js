import React from 'react';
import styles from './Navbar.module.css';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';

function Navbar({ user }) {
  const history = useHistory();
  function handleLogout() {
    history.push('/login');
    auth.signOut();
  }
  return (
    <div className={styles.container}>
      <h2>{user.email}</h2>
      <Link to="/workout">Create Workout</Link>
      <button onClick={handleLogout}>Sign out</button>
    </div>
  );
}

export default Navbar;
