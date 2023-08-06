import { createSlice } from '@reduxjs/toolkit';


export const searchMoviesSlice = createSlice({
    name: 'searchMovies',
    initialState: {
        listMovies: [],
        loading: null,
        error: null,
    },
    reducers: {
        setSearchMovies: (state, action) => {
            state.listMovies = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const { setSearchMovies, setLoading, setError } = searchMoviesSlice.actions;
export default searchMoviesSlice.reducer;

