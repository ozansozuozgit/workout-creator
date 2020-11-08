import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: true,
  },
  reducers: {
    signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password);
    },
  },
});
export const { signup, login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
