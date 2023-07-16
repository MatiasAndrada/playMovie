//PETICIÓN A LA API CON LAS PELÍCULAS TRENDING

import axios from "axios";
import { setTrendingMovies, setLoading, setError } from "../../slices/trendingsMovies";

export const fetchTrendingMovies = () => async (dispatch) => {
    const API_URL = `${process.env.REACT_APP_API_MOVIE_URL}/trending/movie/week?language=es-ES`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer  ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        }
    }
    setLoading(true);
    try {
        const res = await axios.get(API_URL, options);
        const moviesArray = res.data.results;
        dispatch(setTrendingMovies(moviesArray));
    }
    catch (error) {
        dispatch(setError(error));
    } finally {
        setLoading(false);
    }
};


