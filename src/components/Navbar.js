import React from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h2>Hello: {user.email}</h2>
      <Link to="/workout">create workout</Link>{' '}
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}

export default Navbar;
