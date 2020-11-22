import { createSlice } from '@reduxjs/toolkit';

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    currentWorkoutTitle: '',
    currentWorkoutID: '',
    totalMuscleCount: 1,
  },
  reducers: {
    setCurrentWorkoutID: (state, action) => {
      state.currentWorkoutID = action.payload;
    },
    setCurrentWorkoutTitle: (state, action) => {
      state.currentWorkoutTitle = action.payload;
    },
    setTotalMuscleCount: (state, action) => {
      state.totalMuscleCount = action.payload;
    },
    clearCurrentWorkoutID: (state) => {
      state.currentWorkoutID = '';
    },
    clearCurrentWorkoutTitle: (state) => {
      state.currentWorkoutTitle = '';
    },
  },
});

export const {
  setCurrentWorkoutID,
  clearCurrentWorkoutID,
  setCurrentWorkoutTitle,
  clearCurrentWorkoutTitle,
  setTotalMuscleCount,
} = workoutsSlice.actions;

export const selectCurrentWorkoutID = (state) =>
  state.workouts.currentWorkoutID;

export const selectCurrentWorkoutTitle = (state) =>
  state.workouts.currentWorkoutTitle;
export const selectTotalMuscleCount = (state) =>
  state.workouts.totalMuscleCount;

export default workoutsSlice.reducer;
