import React from 'react';
import styles from './WorkoutCard.module.css';
import { setWorkoutExercises } from '../features/exerciseSlice';
import { setCurrentWorkoutID,setCurrentWorkoutTitle } from '../features/workoutsSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function WorkoutCard({ workout }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function modifyWorkout() {
    dispatch(setWorkoutExercises(workout.chosenExercises));
    dispatch(setCurrentWorkoutTitle(workout.title));
    dispatch(setCurrentWorkoutID(workout.id));
    history.push('/workout');
  }
  return (
    <div onClick={modifyWorkout} className={styles.container}>
      {workout.title}
    </div>
  );
}

export default WorkoutCard;
