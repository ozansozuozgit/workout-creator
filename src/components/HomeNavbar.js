import React from 'react';
import styles from './Navbar.module.css';
import { auth } from '../firebase';
import { Link, useHistory } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function HomeNavbar() {
  const history = useHistory();
  const user = useSelector(selectUser);
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

export default HomeNavbar;
