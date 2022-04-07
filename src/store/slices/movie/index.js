import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    term: "",
  },

  reducers: {
    setMovieList: (state, action) => {
      state.list = action.payload;
    },

  },
  
});
export const { setMovieList } = movieSlice.actions;
export default movieSlice.reducer;

