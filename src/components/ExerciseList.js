import React, { useState, useEffect, useRef } from 'react';
import styles from './ExerciseList.module.css';
import db from '../firebase';
import Exercise from './Exercise';

function ExerciseList() {
  const [exerciseList, setExerciseList] = useState([]);
  const myscroll = useRef();
  let start = null;

  useEffect(() => {
    const { current } = myscroll;
    current.addEventListener('scroll', () => {
      if (current.scrollTop + current.clientHeight >= current.scrollHeight) {
        getMoreMessages();
      }
    });

    getMessages();
  }, []);

  function getMessages() {
    let ref = db.collection('exercises');
    ref
      .orderBy('name', 'desc')
      .limit(5)
      .get()
      .then((snapshots) => {
        start = snapshots.docs[snapshots.docs.length - 1];
        console.log(snapshots);
        console.log(start);
        snapshots.forEach((exercise) => {
          setExerciseList((prevArray) => [...prevArray, exercise.data()]);
        });
      });
  }
  function getMoreMessages() {
    let ref = db.collection('exercises');
    console.log('start', start);
    ref
      .orderBy('name', 'desc')
      .startAt(start)
      .limit(5)
      .get()
      .then((snapshots) => {
        start = snapshots.docs[snapshots.docs.length - 2];
        snapshots.forEach((exercise) => {
          setExerciseList((prevArray) => [...prevArray, exercise.data()]);
        });
      });
  }

  return (
    <div className={styles.container} ref={myscroll}>
      {exerciseList.map((exercise) => (
        <Exercise exercise={exercise} />
      ))}
    </div>
  );
}

export default ExerciseList;
