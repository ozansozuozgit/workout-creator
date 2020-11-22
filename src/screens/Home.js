import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import WorkoutList from '../components/WorkoutList';
import MuscleCountList from '../components/MuscleCountList';
import { selectUser } from '../features/userSlice';
import {
  clearCurrentWorkoutID,
  clearCurrentWorkoutTitle,
  setTotalMuscleCount,
} from '../features/workoutsSlice';
import { clearList } from '../features/exerciseSlice';
import { useSelector, useDispatch } from 'react-redux';
import db from '../firebase';
import { motion } from 'framer-motion';
import MobileNavbar from '../components/mobile_nav/MobileNavbar';

function Home() {
  const [workouts, setWorkout] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [workedMuscles, setWorkedMuscles] = useState([]);
  const allMuscles = [];

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw',
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
      x: '-100vw',
    },
  };

  useEffect(() => {
    getWorkouts();

    dispatch(clearCurrentWorkoutID());
    dispatch(clearCurrentWorkoutTitle());
    dispatch(clearList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getWorkouts() {
    setWorkout([]);
    setWorkedMuscles([]);
    db.collection('workouts')
      .where('uid', '==', user.uid)
      .get()
      .then((snapshots) => {
        snapshots.forEach((workout) => {
          setWorkout((prevArray) => [
            ...prevArray,
            { ...workout.data(), id: workout.id },
          ]);
          getMuscleCount(workout);
        });
      });
  }

  function getMuscleCount(workout) {
    workout.data().chosenExercises.forEach((exercise) => {
      allMuscles.push({
        targetMuscle: exercise.targetMuscle,
        sets: exercise.sets,
        reps: exercise.reps,
      });
    });
    let counts = {};

    allMuscles.forEach((el) => {
      counts[el.targetMuscle] = counts[el.targetMuscle]
        ? counts[el.targetMuscle] + 1
        : 1;
    });
    let sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setWorkedMuscles(sorted);
    getTotal(sorted);
  }

  function getTotal(sorted) {
    let total = 0;
    for (let i = 0; i < sorted.length; i++) {
      total += sorted[i][1];
    }
    dispatch(setTotalMuscleCount(total));
  }

  function removeWorkout() {
    setTimeout(() => {
      getWorkouts();
    }, 700);
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.container}
    >
      <MobileNavbar />
      {/* <Navbar user={user} /> */}
      <WorkoutList workouts={workouts} removeWorkout={removeWorkout} />
      <MuscleCountList workedMuscles={workedMuscles} />
    </motion.div>
  );
}

export default Home;
