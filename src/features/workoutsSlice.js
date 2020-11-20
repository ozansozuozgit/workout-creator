import { createSlice } from '@reduxjs/toolkit';

export const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts: [],
  },
  reducers: {
    setWorkout: (state, action) => {
      console.log(action);
      state.workouts.push(action.payload);
    },
  },
});

export const { setWorkout } = workoutsSlice.actions;

export const selectWorkouts = (state) => state.workouts.workouts;

export default workoutsSlice.reducer;
