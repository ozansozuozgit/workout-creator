import React, { useState, useEffect } from 'react';
import styles from './Workout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectChosenExercises, clearList } from '../features/exerciseSlice';
import {
  clearCurrentWorkoutID,
  selectCurrentWorkoutID,
  selectCurrentWorkoutTitle,
  clearCurrentWorkoutTitle,
} from '../features/workoutsSlice';
import { selectUser } from '../features/userSlice';
import WorkoutExercise from './WorkoutExercise';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

function Workout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const chosenExercises = useSelector(selectChosenExercises);
  const currentWorkoutID = useSelector(selectCurrentWorkoutID);
  const currentWorkoutTitle = useSelector(selectCurrentWorkoutTitle);

  const user = useSelector(selectUser);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (currentWorkoutTitle) {
      setTitle(currentWorkoutTitle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInput(e) {
    setTitle(e.target.value);
  }

  function saveWorkout() {
    if (currentWorkoutID === '') {
      db.collection('workouts')
        .doc()
        .set({ title, uid: user.uid, chosenExercises })
        .then(console.log('Workout passed'));
    } else {
      db.collection('workouts')
        .doc(currentWorkoutID)
        .update({ title, uid: user.uid, chosenExercises })
        .then(console.log('Workout passed'));
    }
    dispatch(clearList());
    dispatch(clearCurrentWorkoutID());
    dispatch(clearCurrentWorkoutTitle());
    history.push('/');
  }

  return (
    <div className={styles.container}>
      <button onClick={() => history.push('/')}>Go Home</button>
      <input
        type="text"
        placeholder="Enter Workout Name"
        onChange={handleInput}
        value={title}
      />
      {chosenExercises &&
        chosenExercises.map((exercise, index) => (
          <WorkoutExercise exercise={exercise} key={index} />
        ))}
      <button onClick={saveWorkout}>Save Workout</button>
    </div>
  );
}

export default Workout;
