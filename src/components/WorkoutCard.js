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

    //send up to parent to remove from list
    removeWorkout();
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: '-100vw',
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        duration: 1,
        bounce: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: '-100vw',
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ scale: 1.1 }}
      transition={{ ease: 'backInOut' }}
      className={styles.container}
    >
      <div onClick={modifyWorkout}>
        <h2>{workout.title}</h2>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </motion.div>
  );
}

export default WorkoutCard;
