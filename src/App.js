import { Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import WorkoutCreator from './components/screens/WorkoutCreator';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import PrivateRoute from './components/screens/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/workout" component={WorkoutCreator} />
        <Route eact path="/signup" component={Signup} />
        <Route eact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
