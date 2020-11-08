import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import workoutsReducer from '../features/workoutsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    workouts: workoutsReducer,
  },
});
