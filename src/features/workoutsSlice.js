import { createSlice } from '@reduxjs/toolkit';

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts: null,
  },
  reducers: {},
});

export const selectWorkouts = (state) => state.workouts.workouts;

export default workoutsSlice.reducer;
