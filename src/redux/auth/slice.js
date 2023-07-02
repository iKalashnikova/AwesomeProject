import { createSlice } from "@reduxjs/toolkit";
import {
  signUpUser,
  loginUser,
  logoutUser,
  trackAuthState,
  updateUserAvatar,
} from "./operations";

const initialState = {
  userId: null,
  login: null,
  email: null,
  authChange: false,
  avatar: null,
  error: "",
};

const handlePending = (state, { payload }) => {
  state.authChange = true;
};

const handleFulfilled = (state, { payload }) => {
  // ...state,
  state.authChange = false;
  (state.userId = payload.uid),
    (state.login = payload.login),
    (state.email = payload.email),
    (state.avatar = payload.avatar);
};

const handleRejected = (state, { payload }) => {
  state.authChange = false;
  state.error = error.message;
};

const handleLogOutUser = (state) => {
  state.authChange = false;
  state.userId = null;
  state.login = null;
  state.email = null;
  state.avatar = null;
};

const handleAuthState = (state, { payload }) => {
  state.authChange = false;
  if (payload) {
    state.userId = payload.userId;
    state.login = payload.login;
    state.email = payload.email;
    state.avatar = payload.avatar;
  } else {
    state.userId = null;
    state.login = null;
    state.email = null;
    state.avatar = null;
  }
};

const handleChangeAvatar = (state, {payload}) => {
    state.authChange = false;
    state.avatar = payload.avatar;
  };


export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, handlePending)
      .addCase(signUpUser.fulfilled, handleFulfilled)
      .addCase(signUpUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, handleFulfilled)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, handleLogOutUser)
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(trackAuthState.pending, handlePending)
      .addCase(trackAuthState.fulfilled, handleAuthState)
      .addCase(trackAuthState.rejected, handleRejected)
      .addCase(updateUserAvatar.pending, handlePending)
      .addCase(updateUserAvatar.fulfilled,handleChangeAvatar )
      .addCase(updateUserAvatar.rejected, handleRejected);
  },
});

export const rootReducer = authSlice.reducer;
