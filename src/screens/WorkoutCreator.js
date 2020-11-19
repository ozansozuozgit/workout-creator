import React from 'react';
import styles from './WorkoutCreator.module.css';
import ExerciseList from '../components/ExerciseList';
import Workout from '../components/Workout';
import { selectExercise } from '../features/exerciseSlice';
import { useSelector } from 'react-redux';
import AddExerciseModal from '../components/AddExerciseModal';
function WorkoutCreator() {
  const exercise = useSelector(selectExercise);

  return (
    <div className={styles.container}>
      <Workout />
      <ExerciseList />
      {exercise && <AddExerciseModal exercise={exercise} />}
    </div>
  );
}

export default WorkoutCreator;
