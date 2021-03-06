import { createSlice } from '@reduxjs/toolkit';

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exercise: null,
    chosenExercises: [],
  },
  reducers: {
    setChosenExercises: (state, action) => {
      state.chosenExercises.push(action.payload);
    },
    setWorkoutExercises: (state, action) => {
      state.chosenExercises = action.payload;
    },
    removeExercise: (state, action) => {
      state.chosenExercises = state.chosenExercises.filter(
        (exercise) => exercise.name !== action.payload
      );
    },
    updateSets: (state, action) => {
      let exerciseIndex = state.chosenExercises.findIndex(
        (exercise) => exercise.name === action.payload.name
      );
      state.chosenExercises[exerciseIndex].sets = action.payload.sets;
    },
    updateReps: (state, action) => {
      let exerciseIndex = state.chosenExercises.findIndex(
        (exercise) => exercise.name === action.payload.name
      );
      state.chosenExercises[exerciseIndex].reps = action.payload.reps;
    },
    clearList: (state) => {
      state.chosenExercises = [];
    },
  },
});

export const {
  setChosenExercises,
  removeExercise,
  updateSets,
  updateReps,
  clearList,
  setWorkoutExercises,
} = exerciseSlice.actions;

export const selectExercise = (state) => state.exercise.exercise;
export const selectChosenExercises = (state) => state.exercise.chosenExercises;

export default exerciseSlice.reducer;
