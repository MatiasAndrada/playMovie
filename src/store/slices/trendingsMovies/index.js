import { createSlice } from '@reduxjs/toolkit';

export const trendingsMoviesSlice = createSlice({
    name: 'trendingMovies',
    initialState: {
        listMovies: [],
        loading: null,
        error: null,
    },
    reducers: {
        setTrendingMovies: (state, action) => {
            state.listMovies = action.payload;
            state.error = null; // Restablecer el estado de error a null en una búsqueda exitosa
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.listMovies = []; // Restablecer la lista de películas a un estado vacío en caso de error
        }
    },
});

export const { setTrendingMovies, setLoading, setError } = trendingsMoviesSlice.actions;
export default trendingsMoviesSlice.reducer;
