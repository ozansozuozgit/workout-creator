import React from 'react';
import styles from './WorkoutCreator.module.css';
import ExerciseList from '../components/ExerciseList';
import SelectedExercises from '../components/SelectedExercises';
import { selectExercise } from '../features/exerciseSlice';
import { useSelector } from 'react-redux';
import AddExerciseModal from '../components/AddExerciseModal';
function WorkoutCreator() {
  const exercise = useSelector(selectExercise);

  return (
    <div className={styles.container}>
      <SelectedExercises />
      <ExerciseList />
      {exercise && <AddExerciseModal exercise={exercise} />}
    </div>
  );
}

export default WorkoutCreator;
