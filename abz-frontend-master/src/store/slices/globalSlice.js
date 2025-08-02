// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/Auth/authActions";

const initialState = {
  userData: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login(state, action) {
    //   state.userData = action.payload;
    //   state.isAuthenticated = true;
    // },
    logout(state) {
      state.userData = null;
      state.isAuthenticated = false;
    },
    updateUser(state, action) {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.loggedInUserData = action?.payload?.data;
        state.response = action?.payload;
        state.isLoginOtpSent = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action?.payload;
        state.isLoginOtpSent = false;
        errorToast(action.payload);
      });
  },
});

export const { logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
