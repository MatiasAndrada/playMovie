import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    listMovies: [],
    listMovieDetail: [], 
    userMoviesFav: [],
    loading: null,
  },
  reducers: {
    setMovieList: (state, action) => {
      state.listMovies = action.payload;
    },
    setMovieDetail: (state, action) => {
      state.listMovieDetail = action.payload;
    },
    setUserMoviesFav:(state, action) => {
      state.userMoviesFav = action.payload;
    },
    setLoading: (state, action) =>{
      state.loading = action.payload;
    },
  },
});


export const { setMovieList, setMovieDetail, setUserMoviesFav, setLoading } = movieSlice.actions;
export default movieSlice.reducer;
