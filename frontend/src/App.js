import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WorkoutCreator from './pages/WorkoutCreator';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/workout" component={WorkoutCreator} />
      </Switch>
    </div>
  );
}

export default App;
