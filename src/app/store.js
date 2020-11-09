import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import workoutsReducer from '../features/workoutsSlice';
import exerciseReducer from '../features/exerciseSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    workouts: workoutsReducer,
    exercise: exerciseReducer,
  },
});
