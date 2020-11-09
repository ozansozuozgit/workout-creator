import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import WorkoutCreator from './components/screens/WorkoutCreator';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import { auth } from './firebase';
import PrivateRoute from './components/screens/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        console.log('user is ', authUser);
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        //the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/workout" component={WorkoutCreator} />
        <Route eact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
