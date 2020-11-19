import React, { useState, useEffect, useRef } from 'react';
import styles from './ExerciseList.module.css';
import db from '../firebase';
import Exercise from './Exercise';

function ExerciseList() {
  const [exerciseList, setExerciseList] = useState([]);
  let endOfDocument = useRef(false);
  let start = useRef(null);

  const selectScroll = useRef();
  const selectRef = useRef();

  let search = '';

  useEffect(() => {
    getExercises();
    const { current } = selectScroll;
    current.addEventListener('scroll', () => {
      if (current.scrollTop + current.clientHeight >= current.scrollHeight) {
        getMoreExercises();
      }
    });
    return () => {
      //cleanup
      current.removeEventListener('scroll', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function handleSearch(e) {
    search = e.target.value;
    getExercises(search);
  }

  function handleCategory() {
    endOfDocument.current = false;
    getExercises();
  }

  function getExercises() {
    setExerciseList([]);

    let ref = null;
    if (selectRef.current.value !== 'All') {
      ref = db
        .collection('exercises')
        .where('targetMuscle', '==', selectRef.current.value);
    } else {
      ref = db.collection('exercises');
    }

    ref
      .orderBy('average', 'desc')
      .limit(5)
      .get()
      .then((snapshots) => {
        start.current = snapshots.docs[snapshots.docs.length - 1];
        snapshots.forEach((exercise) => {
          setExerciseList((prevArray) => [...prevArray, exercise.data()]);
        });
      });
  }
  
  function getMoreExercises() {
    if (!endOfDocument.current) {
      let ref = null;
      if (selectRef.current.value !== 'All') {
        ref = db
          .collection('exercises')
          .where('targetMuscle', '==', selectRef.current.value);
      } else {
        ref = db.collection('exercises');
      }
      ref
        .orderBy('average', 'desc')
        .startAfter(start.current)
        .limit(5)
        .get()
        .then((snapshots) => {
          start.current = snapshots.docs[snapshots.docs.length - 1];

          if (!start.current) endOfDocument.current = true;

          snapshots.forEach((exercise) => {
            setExerciseList((prevArray) => [...prevArray, exercise.data()]);
          });
        });
    }
  }

  return (
    <div className={styles.container} ref={selectScroll}>
      <label htmlFor="abs">Abs</label>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Exercise"
        onChange={handleSearch}
      />
      <select
        name="categories"
        id="categories"
        onChange={handleCategory}
        ref={selectRef}
      >
        <option value="All">All</option>
        <option value="Chest">Chest</option>
        <option value="Forearms">Forearms</option>
        <option value="Lats">Lats</option>
        <option value="Middle Back">Middle Back</option>
        <option value="Lower Back">Lower Back</option>
        <option value="Neck">Neck</option>
        <option value="Quadriceps">Quadriceps</option>
        <option value="Hamstrings">Hamstrings</option>
        <option value="Calves">Calves</option>
        <option value="Triceps">Triceps</option>
        <option value="Traps">Traps</option>
        <option value="Shoulders"></option>
        <option value="Abdominals">Abdominals</option>
        <option value="Glutes">Glutes</option>
        <option value="Biceps">Biceps</option>
        <option value="Adductors">Abductors</option>
      </select>

      {exerciseList.map((exercise, index) => (
        <Exercise exercise={exercise} key={index} />
      ))}
    </div>
  );
}

export default ExerciseList;
