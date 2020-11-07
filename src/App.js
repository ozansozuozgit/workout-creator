import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import WorkoutCreatorScreen from './screens/WorkoutCreatorScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/workout" component={WorkoutCreatorScreen} />
      </Switch>
    </div>
  );
}

export default App;
