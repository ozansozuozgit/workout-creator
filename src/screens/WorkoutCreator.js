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
