import axios from "axios";
import {
  setSearchMovies,
  setLoading,
  setError,
} from "../../../slices/searchMovies/byMovie";

export const fetchAllMovies = (TERM) => async (dispatch) => {
  setLoading(true);
  try {
    const API_KEY = process.env.REACT_APP_API_MOVIE_KEY_AUTH;
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${TERM}&language=es-ES`;
    const res = await axios.get(API_URL);
    console.log("res", res);
    const moviesArray = res.data.results;
    dispatch(setSearchMovies(moviesArray));
  } catch (error) {
    dispatch(setError(error.code));
  } finally {
    setLoading(false);
  }
};



