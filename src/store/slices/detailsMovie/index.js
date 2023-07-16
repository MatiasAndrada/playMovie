import { createSlice } from "@reduxjs/toolkit";

export const detailsMovieSlice = createSlice({
    name: "detailsMovie",
    initialState: {
        objectMovieDetail: {},
        loading: null,
        error: null,
    },
    reducers: {
        setDetailMovie: (state, action) => {
            state.objectMovieDetail = action.payload;
            state.error = null; // Restablecer el estado de error a null en una búsqueda exitosa
        },
        setLoading: (state, action) => {
            state.loading = action.payload; 
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.objectMovieDetail = {}; // Restablecer la lista de películas a un estado vacío en caso de error
        }
    },
});

export const { setDetailMovie, setLoading, setError } = detailsMovieSlice.actions;
export default detailsMovieSlice.reducer;



