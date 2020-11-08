import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../firebase';

function PrivateRoute({ component: Component, ...rest }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(auth.currentUser);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log({ user });
        setUser(user);
      } else {
        console.log('no user');
        setUser(user);
      }
    });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
