import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import { selectCurrentWorkoutID } from '../features/workoutsSlice';
import { useSelector, useDispatch } from 'react-redux';
import WorkoutCard from '../components/WorkoutCard';

function Home() {
  const [workouts, setWorkout] = useState([]);
  const user = useSelector(selectUser);
  const currentWorkoutID = useSelector(selectCurrentWorkoutID);

  useEffect(() => {
    db.collection('workouts')
      .where('uid', '==', user.uid)
      .get()
      .then((snapshots) => {
        snapshots.forEach((workout) => {
          setWorkout((prevArray) => [
            ...prevArray,
            { ...workout.data(), id: workout.id },
          ]);
        });
      });
  }, [user, currentWorkoutID]);

  return (
    <div className={styles.home}>
      <h1>Home</h1>
      {workouts &&
        workouts.map((workout, index) => (
          <WorkoutCard key={index} workout={workout} />
        ))}
      <button onClick={() => auth.signOut()}>Sign out</button>
      <Link to="/workout">go to workout</Link>
    </div>
  );
}

export default Home;
