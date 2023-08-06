import axios from "axios";
import { setDetailMovie, setLoading, setError } from "../../slices/detailsMovie/index"

export const fetchMovieDetail = (ID) => async (dispatch) => {
  dispatch(setLoading(true));
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${ID}?append_to_response=videos%2Cimages%2Ccredits&language=es-ES`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
    }
  };
  axios.request(options).then(function (response) {
    dispatch(setDetailMovie(response.data));
    dispatch(setLoading(false));
  }
  ).catch(function (error) {
    dispatch(setError(error));
    dispatch(setLoading(false));
  }
  );
}

export const movieDetailReset = () => async (dispatch) => {
  dispatch(setDetailMovie({}));
  dispatch(setLoading(false));
  dispatch(setError(null));
}
