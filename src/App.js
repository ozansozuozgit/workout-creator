import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import WorkoutCreator from './screens/WorkoutCreator';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { auth } from './firebase';
import PrivateRoute from './screens/PrivateRoute';
import Loader from './components/Loader';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/workout" component={WorkoutCreator} />
          <Route eact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      )}
    </div>
  );
}

export default App;
