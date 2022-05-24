import { createSlice } from "@reduxjs/toolkit";

export const favouriteListSlice = createSlice({
  name: "favouriteList",
  initialState: {
    movies: {
      Title: "",
      Poster: "",
    },
  },
  reducers: {
    setMovieFavourite: (state, action) => {
      console.log(state);
      // no se si hacer push para agregar o con algun metodo de fb
      return {
        ...state,
        Title: action.payload.Title,
        Poster: action.payload.Poster,
      };
    },
    /*     deleteMovieItem: (state, action) => {
    }, */
  },
});
export const { setMovieFavourite } = favouriteListSlice.actions;
export default favouriteListSlice.reducer;
