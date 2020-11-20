import { createSlice } from '@reduxjs/toolkit';

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exercise: null,
    chosenExercises: [],
  },
  reducers: {
    setExercise: (state, action) => {
      state.exercise = action.payload;
    },
    setChosenExercises: (state, action) => {
      state.chosenExercises.push(action.payload);
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
  },
});

export const {
  setExercise,
  setChosenExercises,
  removeExercise,
  updateSets,
  updateReps
} = exerciseSlice.actions;

export const selectExercise = (state) => state.exercise.exercise;
export const selectChosenExercises = (state) => state.exercise.chosenExercises;

export default exerciseSlice.reducer;
