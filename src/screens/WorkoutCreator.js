import React from 'react';
import styles from './WorkoutCreator.module.css';
import ExerciseList from '../components/ExerciseList';
import SelectedExercises from '../components/SelectedExercises';
import WorkoutNavbar from '../components/WorkoutNavbar';

import { motion } from 'framer-motion';
import MobileNavbar from '../components/mobile_nav/MobileNavbar';
function WorkoutCreator() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      x: '100vw',
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
      <div className={styles.left_container}>
        <WorkoutNavbar />
        <SelectedExercises />
      </div>
      {/* <ExerciseList /> */}
      <MobileNavbar />
    </motion.div>
  );
}

export default WorkoutCreator;
