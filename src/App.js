import { Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import WorkoutCreator from './components/screens/WorkoutCreator';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workout" component={WorkoutCreator} />
      </Switch>
    </div>
  );
}

export default App;
