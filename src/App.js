import React, { useEffect, useState } from 'react';
import Home from './screens/Home';
import WorkoutCreator from './screens/WorkoutCreator';
import Login from './screens/Login';
import Signup from './screens/Signup';
import PrivateRoute from './screens/PrivateRoute';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { Switch, Route, useLocation } from 'react-router-dom';
import { auth } from './firebase';
import Loader from './components/Loader';
import styles from './App.module.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            email: authUser.email,
            uid: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/workout" component={WorkoutCreator} />
            <Route eact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
