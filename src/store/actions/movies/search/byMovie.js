import axios from "axios";
import {
  setSearchMovies,
  setLoading,
  setError,
} from "../../../slices/searchMovies/byMovie";

export const fetchAllMovies = (TERM) => async (dispatch) => {
  setLoading(true);
  try {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${TERM}&language=es-ES`;
    const res = await axios.get(API_URL);
    const moviesArray = res.data.results;
    dispatch(setSearchMovies(moviesArray));
  } catch (error) {
    dispatch(setError(error.code));
  } finally {
    setLoading(false);
  }
};
