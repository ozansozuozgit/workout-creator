import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../firebase';

function PrivateRoute({ component: Component, ...rest }) {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    console.log(auth.currentUser);
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log({ user });
        setCurrentUser(user);
      } else {
        console.log('no user');
        setCurrentUser(user);
      }
    });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
