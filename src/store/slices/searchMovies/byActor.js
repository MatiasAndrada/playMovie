import { createSlice } from "@reduxjs/toolkit";


export const actorInfoSlice = createSlice({
    name: "actorInfoSlicer",
    initialState: {
        actorInfo: [],
        loading: null,
        error: null,
    },
    reducers: {
        setActorInfo: (state, action) => {
            state.actorInfo = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const { setActorInfo, setLoading, setError } = actorInfoSlice.actions;
export default actorInfoSlice.reducer;