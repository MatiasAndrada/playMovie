import axios from "axios";
import {
  setSearchMovies,
  setLoading,
  setError,
} from "../../slices/searchMovies/index";

export const fetchAllMovies = (TERM) => async (dispatch) => {
  setLoading(true);
  try {
    const API_KEY = process.env.REACT_APP_API_MOVIE_KEY_AUTH;
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${TERM}&language=es-ES`;
    const res = await axios.get(API_URL);
    const moviesArray = res.data.results;
    //edit url 
    moviesArray.forEach((movie) => {
      movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    });

    await Promise.all(
      moviesArray.map(async (movie) => {
        const videoURL = await getMovieTrailer(movie.id);
        console.log("videoURL", videoURL);
      })
    );

    dispatch(setSearchMovies(moviesArray));
  } catch (error) {
    dispatch(setError(error.code));
  } finally {
    setLoading(false);
  }
};


const getMovieTrailer = async (movieID) => {
  try {
    const API_KEY = "48386477fd5a704de62303af24c0fc49";
    const API_URL = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}`;
    const res = await axios.get(API_URL);
    const trailers = res.data.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );

    if (trailers.length > 0) {
      const trailerKey = trailers[0].key;
      const trailerURL = `https://www.youtube.com/watch?v=${trailerKey}`;
      return trailerURL;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};