import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import {
  selectCurrentWorkoutID,
  clearCurrentWorkoutID,
  clearCurrentWorkoutTitle,
} from '../features/workoutsSlice';
import { clearList } from '../features/exerciseSlice';
import { useSelector, useDispatch } from 'react-redux';
import WorkoutCard from '../components/WorkoutCard';
import MuscleCount from '../components/MuscleCount';

function Home() {
  const [workouts, setWorkout] = useState([]);
  const user = useSelector(selectUser);
  const currentWorkoutID = useSelector(selectCurrentWorkoutID);
  const dispatch = useDispatch();
  const [workedMuscles, setWorkedMuscles] = useState([]);

  useEffect(() => {
    if (currentWorkoutID === '') {
      db.collection('workouts')
        .where('uid', '==', user.uid)
        .get()
        .then((snapshots) => {
          const allMuscles = [];

          snapshots.forEach((workout) => {
            setWorkout((prevArray) => [
              ...prevArray,
              { ...workout.data(), id: workout.id },
            ]);
            workout.data().chosenExercises.forEach((exercise) => {
              allMuscles.push({
                targetMuscle: exercise.targetMuscle,
                sets: exercise.sets,
                reps: exercise.reps,
              });
            });
            let counts = {};

            allMuscles.forEach((el) => {
              counts[el.targetMuscle] = counts[el.targetMuscle]
                ? counts[el.targetMuscle] + 1
                : 1;
            });

            let sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
            setWorkedMuscles(sorted);
          });
        });
    }
  }, [user, currentWorkoutID]);

  useEffect(() => {
    dispatch(clearCurrentWorkoutID());
    dispatch(clearCurrentWorkoutTitle());
    dispatch(clearList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function removeWorkout(id) {
    setWorkout(workouts.filter((workout) => workout.id !== id));
  }

  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <h2>Hello: {user.email}</h2>
      {workouts &&
        workouts.map((workout, index) => (
          <WorkoutCard
            key={index}
            workout={workout}
            removeWorkout={removeWorkout}
          />
        ))}
      {workedMuscles &&
        workedMuscles.map((muscle) => <MuscleCount muscle={muscle} />)}
      <button onClick={() => auth.signOut()}>Sign out</button>
      <Link to="/workout">go to workout</Link>
    </div>
  );
}

export default Home;
