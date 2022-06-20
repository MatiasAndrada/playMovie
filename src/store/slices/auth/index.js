import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    activo: false,
    error: "",
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
    setUserLogOut: (state, action)=>{
      return{
        ...state,
        loading: false,
        activo: action.payload,
        error: "",
        user: {},
      }
    },
    state: (state) => {
      return { ...state };
    },
  },
});
export const { loading, setUserError, setUserSuccess, setUserLogOut, state } =
  authSlice.actions;
export default authSlice.reducer;
