import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';

export const signIn = (credentials) => {
  return async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
      console.log('login success');
    } catch (error) {
      console.log({ error });
      dispatch(signInAction(error.message));
    }
  };
};

export const signUp = (newUser) => {
  return async (dispatch) => {
    try {
      await auth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      );
      console.log('signup success');
    } catch (error) {
      console.log({ error });
      dispatch(signUpAction(error.message));
    }
  };
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authError: null,
  },
  reducers: {
    signInAction(state, action) {
      console.log(action.payload);
      state.authError = action.payload;
    },
    signUpAction(state, action) {
      state.authError = action.payload;
    },
  },
});

export const { signInAction, signUpAction } = authSlice.actions;

export const selectAuth = (state) => state.auth.authError;

export default authSlice.reducer;
