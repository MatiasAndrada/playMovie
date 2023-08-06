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
            state.error = []; // Restablecer el estado de error a null en una búsqueda exitosa
            state.loading = false; // Restablecer el estado de carga a false en una búsqueda exitosa
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.listMoviesFav = []; // Restablecer la lista de películas a un estado vacío en caso de error
            state.loading = false; // Restablecer el estado de carga a false en caso de error

        }   
    },
});

export const { setMoviesFav, setLoading, setError } = favoritesMoviesSlice.actions;
export default favoritesMoviesSlice.reducer;
