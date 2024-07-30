import axios from "axios";
import {
  setError,
  setLoading,
  setActorInfo,
} from "../../../slices/searchMovies/byActor";

export const fetchMoviesByActor = (actorID) => async (dispatch) => {
  setLoading(true);
  try {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const API_URL = `https://api.themoviedb.org/3/person/${actorID}?api_key=${API_KEY}&append_to_response=movie_credits&language=es-ES `;
    const res = await axios.get(API_URL);
    const searchResult = res.data;
    searchResult.profile_path = `https://image.tmdb.org/t/p/w500${searchResult.profile_path}`;
    searchResult.movie_credits.cast.forEach((movie) => {
      movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
      movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    });
    //order for popularity
    searchResult.movie_credits.cast.sort((a, b) => b.popularity - a.popularity);
    dispatch(setActorInfo(searchResult));
  } catch (error) {
    dispatch(setError(error.code));
  } finally {
    setLoading(false);
  }
};

/*
const axios = require('axios');

const options = {
method: 'GET',
url: 'https://api.themoviedb.org/3/person/3223?append_to_response=movie_credits&language=es-ES',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjgzZjQ0YWU3MzIyZDA3MmFkODIyYTIxMDAwZmQyZSIsInN1YiI6IjY0YTcxYjUwOTU3ZTZkMDEzOWNmMGVmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YbIMDOrhjGXyhtLC1citVtAPDWz1qP8_E1suwIPqY5g'
}
};

axios
.request(options)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error);
});
 */
