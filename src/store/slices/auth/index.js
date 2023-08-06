import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    activo: false,
    error: null,
    user: {
      email: "",
      uid: ""
    },
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setUserError: (state, action) => {
      return {
        ...state,
        loading: false,
        activo: false,
        error: action.payload,
        user: {}
      }
    },
    setUserSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        activo: true,
        error: null,
        user: action.payload,
      };
    },
    setUserLogOut: (state) => {
      return {
        ...state,
        loading: false,
        activo: false,
        error: null,
        user: {},
      }
    },
  },
});
export const { loading, setUserError, setUserSuccess, setUserLogOut, state } =
  authSlice.actions;
export default authSlice.reducer;
