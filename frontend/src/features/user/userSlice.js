import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    exercises:null
  },
  reducers: {},
});

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
