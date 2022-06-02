import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    listMovies: [],
    listMovieDetail: [], 
    listMoviesFav: [],
    loading: null,
  },
  reducers: {
    setMovieList: (state, action) => {
      state.listMovies = action.payload;
    },
    setMovieDetail: (state, action) => {
      state.listMovieDetail = action.payload;
    },
    setMovieFav:(state, action ) => {
      state.listMoviesFav = action.payload;
    },
    setLoading: (state, action) =>{
      state.loading = action.payload;
    },
  },
});


export const { setMovieList, setMovieDetail, setMovieFav,setLoading } = movieSlice.actions;
export default movieSlice.reducer;
