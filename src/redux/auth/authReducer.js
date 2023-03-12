import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  login: null,
  email: null,
  avatar: null,
  stateChange: false,
};

const actions = {
  updateUserProfile: (state, { payload }) => ({
    ...state,
    userId: payload.userId,
    login: payload.login,
    email: payload.email,
    avatar: payload.avatar,
  }),

  authStateChange: (state, { payload }) => ({
    ...state,
    stateChange: payload.stateChange,
  }),

  authSighOut: () => initialState,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: actions,
});
