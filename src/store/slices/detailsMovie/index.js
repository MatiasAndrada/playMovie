import { createSlice } from "@reduxjs/toolkit";

export const detailsMovieSlice = createSlice({
    name: "detailsMovie",
    initialState: {
        objectMovieDetail: {
            id: 0,
            imdb_id: "",
            original_language: "",
            original_title: "",
            title: "",
            backdrop_path: "",
            poster_path: "",
            popularity: 0,
            belongs_to_collection: null,
            trailer_key: "",
            overview: "",
            release_date: "",
            runtime: 0,
            vote_average: 0,
            vote_count: 0,
            genres: [{
                id: 0,
                name: ""
            }],
            credits: {
                cast: [],
                crew: []
            },
            production_companies: [
                {
                    id: 0,
                    logo_path: "",
                    name: "",
                    origin_country: ""
                }
            ],
            production_countries: [
                {
                    iso_3166_1: "",
                    name: ""
                }
            ],
            spoken_languages: [
                {
                    english_name: "",
                    iso_639_1: "",
                    name: ""
                }
            ],
            images: {
                backdrops: [
                    {
                        aspect_ratio: 0,
                        file_path: "",
                        height: 0,
                        iso_639_1: "",
                        vote_average: 0,
                        vote_count: 0,
                        width: 0
                    }
                ],
                posters: [
                    {
                        aspect_ratio: 0,
                        file_path: "",
                        height: 0,
                        iso_639_1: "",
                        vote_average: 0,
                        vote_count: 0,
                        width: 0
                    }
                ]
            },
            videos: {
                results: [
                    {
                        id: "",
                        iso_639_1: "",
                        iso_3166_1: "",
                        key: "",
                        name: "",
                        site: "",
                        size: 0,
                        type: ""
                    }
                ]
            },
        },
        loading: null,
        error: null,
    },
    reducers: {
        setDetailMovie: (state, action) => {
            state.objectMovieDetail = action.payload;
                
        },
        setLoading: (state, action) => {
            state.loading = action.payload; 
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.objectMovieDetail = {}; 
        }
    },
});

export const { setDetailMovie, setLoading, setError } = detailsMovieSlice.actions;
export default detailsMovieSlice.reducer;



