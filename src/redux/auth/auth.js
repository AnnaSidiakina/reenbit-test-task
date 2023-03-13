import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const googleAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      user: payload,
      isLoggedIn: true,
    }),
    logout: () => initialState,
  },
});

export const googleAuthReducer = googleAuthSlice.reducer;
export const { login, logout } = googleAuthSlice.actions;
