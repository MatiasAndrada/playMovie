import axios from "axios";
import { setMovieList } from "../slices/movie";





export const fetchAllMovies = (TERM) => async (dispatch) => {
  try{
    const API = "http://www.omdbapi.com/?i=tt3896198&apikey=6f329d41"
    const res = await axios.get(API + `&s=` + TERM)
    const moviesAray = res.data.Search;
    dispatch(setMovieList(moviesAray))
  } catch(error){
    console.log(error)
  }

}