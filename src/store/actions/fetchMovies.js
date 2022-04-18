import axios from "axios";
import { setMovieList, setLoading } from "../slices/movie";

export const fetchAllMovies = (TERM) => async (dispatch) => {
  setLoading(true);
  try {
    const API_URL = `http://www.omdbapi.com/?&apikey=6f329d41`;
    const res = await axios.get(API_URL + `&s=` + TERM);
    const moviesAray = res.data.Search;
    dispatch(setMovieList(moviesAray));
  } catch (error) {
    console.log(error);
  }
};
