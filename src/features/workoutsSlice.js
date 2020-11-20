import { createSlice } from '@reduxjs/toolkit';

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    currentWorkoutTitle: '',
    currentWorkoutID: '',
  },
  reducers: {
    setCurrentWorkoutID: (state, action) => {
      state.currentWorkoutID = action.payload;
    },
    setCurrentWorkoutTitle: (state, action) => {
      state.currentWorkoutTitle = action.payload;
    },
    clearCurrentWorkoutID: (state) => {
      state.currentWorkoutID = '';
    },
    clearCurrentWorkoutTitle: (state) => {
      state.currentWorkoutID = '';
    },
  },
});

export const {
  setCurrentWorkoutID,
  clearCurrentWorkoutID,
  setCurrentWorkoutTitle,
  clearCurrentWorkoutTitle,
} = workoutsSlice.actions;

export const selectCurrentWorkoutID = (state) =>
  state.workouts.currentWorkoutID;

export const selectCurrentWorkoutTitle = (state) =>
  state.workouts.currentWorkoutTitle;

export default workoutsSlice.reducer;
