import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import {
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
  const dispatch = useDispatch();
  const [workedMuscles, setWorkedMuscles] = useState([]);
  const allMuscles = [];

  useEffect(() => {
    getWorkouts();

    dispatch(clearCurrentWorkoutID());
    dispatch(clearCurrentWorkoutTitle());
    dispatch(clearList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getWorkouts() {
    setWorkout([]);
    setWorkedMuscles([]);
    db.collection('workouts')
      .where('uid', '==', user.uid)
      .get()
      .then((snapshots) => {
        snapshots.forEach((workout) => {
          setWorkout((prevArray) => [
            ...prevArray,
            { ...workout.data(), id: workout.id },
          ]);
          getMuscleCount(workout);
        });
      });
  }

  function getMuscleCount(workout) {
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
  }

  function removeWorkout() {
    setTimeout(() => {
      getWorkouts();
    }, 700);
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
        workedMuscles.map((muscle, index) => (
          <MuscleCount key={index} muscle={muscle} />
        ))}
      <button onClick={() => auth.signOut()}>Sign out</button>
      <Link to="/workout">create workout</Link>
    </div>
  );
}

export default Home;
