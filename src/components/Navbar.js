import React from 'react';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import styles from './Navbar.module.css';

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
