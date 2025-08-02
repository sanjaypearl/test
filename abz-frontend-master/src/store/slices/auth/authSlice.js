// ----------------------------------------------Imports-----------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../actions/Auth/authActions";
import { toast } from "sonner";
import { errorToast } from "@/utils";

//------------------------------------------------------------------------------------------------------------

const initialState = {
  isLoginLoading: false,
  isUserLoggedIn: false,
  loggedInUserData: null,
  errorMessage: "",
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoginState: (state, action) => {
      state.isLoading = false;
    },

    logoutUser: (state) => {
      state.isLoading = false;
      state.isUserLoggedIn = false;
      state.loggedInUserData = {};
      state.isLoginOtpSent = false;
      state.isForgotPasswordOtpSent = false;
      state.isVerifiedOTP = false;
      state.isPasswordChanged = false;
    },
    clearReduxStoreData: (state, action) => {},
    isUserLoggedInTrue: (state, action) => {
      (state.isUserLoggedIn = true), (state.isLoginOtpSent = false);
    },
  },
  extraReducers: (builder) => {
    builder
      // login lifecycle actions
      .addCase(login.pending, (state, action) => {
        state.isLoginLoading = true;
        state.errorMessage = null;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("Login successful:", action.payload);
        state.isLoginLoading = false;
        state.errorMessage = null;
        state.loggedInUserData = action?.payload?.data;
        state.isUserLoggedIn = true;
        state.error = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoginLoading = false;
        state.error = true;
        console.log(action.payload);
        state.errorMessage =
          action?.payload || action?.payload?.message || "something went wrong";
        toast.error(
          action?.payload || action?.payload?.message || "something went wrong"
        );
      });

    //   // logout lifecycle actions
    //   .addCase(logout.pending, (state, action) => {
    //     state.isLoading = true;
    //     state.errorMessage = "";
    //     state.isUserLoggedIn = false;
    //   })
    //   .addCase(logout.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.errorMessage = "";
    //     state.isUserLoggedIn = false;
    //     state.loggedInUserData = {};
    //     toast.success("Logout successfully");
    //   })
    //   .addCase(logout.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.errorMessage = action?.payload;
    //     errorToast(action?.payload?.response?.data?.message || "Error!");
    //   });
  },
});

export const authReducer = authSlice.reducer;
export const {
  resetLoginState,
  clearReduxStoreData,
  isUserLoggedInTrue,
  logoutUser,
} = authSlice.actions;

export const getUserData = (state) => state.auth.loggedInUserData;
