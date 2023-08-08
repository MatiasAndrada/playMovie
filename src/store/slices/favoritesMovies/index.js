import { createSlice } from "@reduxjs/toolkit";

export const favoritesMoviesSlice = createSlice({
    name: "favoritesMovies",
    initialState: {
        listMoviesFav: [],
        loading: null,
        error: [],
    },
    reducers: {
        setMoviesFav: (state, action) => {
            state.listMoviesFav = action.payload;
            state.error = [];
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.listMoviesFavorite = [];

        }
    },
});

export const { setMoviesFav, setLoading, setError } = favoritesMoviesSlice.actions;
export default favoritesMoviesSlice.reducer;
