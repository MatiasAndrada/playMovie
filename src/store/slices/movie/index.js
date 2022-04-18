import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    listMovies: [],
    listMovieDetail: [], 
    loading: null,
  },
  reducers: {
    setMovieList: (state, action) => {
      state.listMovies = action.payload;
    },
    setMovieDetail: (state, action) => {
      state.listMovieDetail = action.payload;
    },
    setLoading: (state, action) =>{
      state.loading = action.payload;
    },
  },
});


export const { setMovieList, setMovieDetail, setLoading } = movieSlice.actions;
export default movieSlice.reducer;
