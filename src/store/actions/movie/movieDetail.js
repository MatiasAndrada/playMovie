import axios from "axios";
import { setMovieDetail } from "../../slices/movie";

export const fetchMovieDetail = (ID) => async (dispatch) => {
  try {
    const API_URL= `http://www.omdbapi.com/?&apikey=6f329d41`;
    const API_PROPS=`&plot=full`
    const API_RES = await axios.get(API_URL + `&i=${ID}`  + API_PROPS);
    const arrayDetail= API_RES.data;
    dispatch(setMovieDetail(arrayDetail));
    
  } catch (error) {
    console.log(error);
  }
};
