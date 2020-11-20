import React from 'react';
import styles from './WorkoutCard.module.css';
import { setWorkoutExercises } from '../features/exerciseSlice';
import {
  setCurrentWorkoutID,
  setCurrentWorkoutTitle,
} from '../features/workoutsSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import db from '../firebase';

function WorkoutCard({ workout, removeWorkout }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function modifyWorkout() {
    dispatch(setWorkoutExercises(workout.chosenExercises));
    dispatch(setCurrentWorkoutTitle(workout.title));
    dispatch(setCurrentWorkoutID(workout.id));
    history.push('/workout');
  }

  function handleDelete() {
    db.collection('workouts')
      .doc(workout.id)
      .delete()
      .then(console.log('workout deleted'));
      
      //send up the id to the parent to remove from list
    removeWorkout(workout.id);
  }

  return (
    <div className={styles.container}>
      <div onClick={modifyWorkout}> {workout.title}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default WorkoutCard;
