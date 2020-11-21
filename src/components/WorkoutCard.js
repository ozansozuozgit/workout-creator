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
import { motion } from 'framer-motion';

function WorkoutCard({ workout, removeWorkout }) {
  const dispatch = useDispatch();
  const history = useHistory();

  function modifyWorkout(e) {
    console.log(e.target);
    if (e.target.tagName === 'BUTTON') return;
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

    //send up to parent to remove from list
    removeWorkout();
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ ease: 'backInOut' }}
      className={styles.container}
      onClick={modifyWorkout}
    >
      <div>
        <h2>{workout.title}</h2>
      </div>
      <button className={styles.close} onClick={handleDelete}></button>
    </motion.div>
  );
}

export default WorkoutCard;
