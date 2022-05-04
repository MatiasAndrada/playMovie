import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    activo: false,
    error: "",
    user: {},
  },
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setUserError: (state, action) => {
      return{
        ...state,
        loading: false,
        activo: false,
        error: action.payload,
      }
    },
    setUserSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        activo: true,
        error: " ",
        user: action.payload,
      };
    },
    state: (state) => {
      return { ...state };
    },
  },
});
export const { loading, setUserError, setUserSuccess, state } =
  authSlice.actions;
export default authSlice.reducer;
