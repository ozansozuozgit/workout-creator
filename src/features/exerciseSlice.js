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
  },
});

export const { setExercise, setChosenExercises } = exerciseSlice.actions;
export const selectExercise = (state) => state.exercise.exercise;
export const selectChosenExercises = (state) => state.exercise.chosenExercises;

export default exerciseSlice.reducer;
