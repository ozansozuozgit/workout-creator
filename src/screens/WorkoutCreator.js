import React from 'react';
import styles from './WorkoutCreator.module.css';
import ExerciseList from '../components/ExerciseList';
import SelectedExercises from '../components/SelectedExercises';
import { selectExercise } from '../features/exerciseSlice';
import { useSelector } from 'react-redux';
import AddExerciseModal from '../components/AddExerciseModal';
import { motion } from 'framer-motion';
function WorkoutCreator() {
  const exercise = useSelector(selectExercise);
  const containerVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
    exit: {
      scale: 0,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.container}
    >
      <SelectedExercises />
      <ExerciseList />
      {/* {exercise && <AddExerciseModal exercise={exercise} />} */}
    </motion.div>
  );
}

export default WorkoutCreator;
