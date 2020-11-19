import React, { useState, useEffect, useRef } from 'react';
import styles from './ExerciseList.module.css';
import db from '../firebase';
import Exercise from './Exercise';

function ExerciseList() {
  const [exerciseList, setExerciseList] = useState([]);
  const myscroll = useRef();
  let start = null;
  let endOfDocument = false;

  useEffect(() => {
    const { current } = myscroll;
    current.addEventListener('scroll', () => {
      if (current.scrollTop + current.clientHeight >= current.scrollHeight) {
        getMoreMessages();
      }
    });
    getMessages();
    return () => {
      //cleanup
      current.removeEventListener('scroll', () => {});
    };
  }, []);

  function getMessages() {
    let ref = db.collection('exercises');
    ref
      .orderBy('average', 'desc')
      .limit(5)
      .get()
      .then((snapshots) => {
        start = snapshots.docs[snapshots.docs.length - 1];
        snapshots.forEach((exercise) => {
          setExerciseList((prevArray) => [...prevArray, exercise.data()]);
        });
      });
  }
  function getMoreMessages() {
    if (!endOfDocument) {
      let ref = db.collection('exercises');
      ref
        .orderBy('average', 'desc')
        .startAfter(start)
        .limit(10)
        .get()
        .then((snapshots) => {
          start = snapshots.docs[snapshots.docs.length - 1];
          if (!start) endOfDocument = true;
          snapshots.forEach((exercise) => {
            setExerciseList((prevArray) => [...prevArray, exercise.data()]);
          });
        });
    }
  }

  return (
    <div className={styles.container} ref={myscroll}>
      <label htmlFor="abs"> Abs</label>
      <input type="checkbox" name="abs" id="abs" />
      {exerciseList.map((exercise, index) => (
        <Exercise exercise={exercise} key={index} />
      ))}
    </div>
  );
}

export default ExerciseList;
