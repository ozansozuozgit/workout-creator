import { createSlice } from '@reduxjs/toolkit';

export const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: {
    exercise: null,
  },
  reducers: {
    setExercise: (state, action) => {
      state.exercise = action.payload;
    },

  },
});

export const { setExercise, logout } = exerciseSlice.actions;
export const selectExercise = (state) => state.exercise.user;

export default exerciseSlice.reducer;
