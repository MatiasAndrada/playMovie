import db from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { /* setUserSuccess, setUserError, */ loading } from "../../slices/auth";


export const newMovieFav = (Title, Poster, ID) =>  async (dispatch) => {
    console.log("0")
    console.log(Title, Poster, ID)
     dispatch(loading(true)) 
     try {
        const docData = {
        imdbID: ID,
        Title: Title,
        Poster: Poster,
    };
    const res = await setDoc(doc(db, "favoriteMovieList", "tt0295297"), docData)
    console.log("🚀 ~ file: setFavoriteList.js ~ line 17 ~ newMovieFav ~ res", res)
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
