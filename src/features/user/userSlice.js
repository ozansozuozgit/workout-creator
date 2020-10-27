import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {},
});

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
