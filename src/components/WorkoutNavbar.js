import React, { useState, useEffect } from 'react';
import styles from './WorkoutNavbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectChosenExercises, clearList } from '../features/exerciseSlice';
import {
  clearCurrentWorkoutID,
  selectCurrentWorkoutID,
  selectCurrentWorkoutTitle,
  clearCurrentWorkoutTitle,
} from '../features/workoutsSlice';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

function WorkoutNavbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const chosenExercises = useSelector(selectChosenExercises);
  const currentWorkoutID = useSelector(selectCurrentWorkoutID);
  const currentWorkoutTitle = useSelector(selectCurrentWorkoutTitle);

  const user = useSelector(selectUser);
  const [title, setTitle] = useState('');
  let belowZeroSetsorReps = false;

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
    if (title === '') {
      alert('Enter Title!');
      return;
    }

    for (let chosenExercise of chosenExercises) {
      if (chosenExercise.sets <= 0 || chosenExercise.reps <= 0)
        belowZeroSetsorReps = true;
    }

    if (belowZeroSetsorReps) {
      alert('Your exercises cannot have 0 or below reps or sets!');
      return;
    }

    if (currentWorkoutID === '') {
      db.collection('workouts')
        .doc()
        .set({ title, uid: user.uid, chosenExercises });
    } else {
      db.collection('workouts')
        .doc(currentWorkoutID)
        .update({ title, uid: user.uid, chosenExercises });
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
      <button onClick={saveWorkout}>Save Workout</button>
    </div>
  );
}

export default WorkoutNavbar;
