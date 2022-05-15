import db from "../../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { /* setUserSuccess, setUserError, */ loading } from "../../slices/auth";


export const newMovieFav = (data) =>  async (dispatch) => {
    console.log("0")
    console.log(data)
     dispatch(loading(true)) 
     try {
       /* const docData = {
         imdbID: data.ID,
         Title: data.Title,
         Poster: data.Poster,
        } */
        const res = await setDoc(doc(db, "favoriteMovieList", "tt0295297"), data)
        console.log("🚀 ~ file: setFavoriteList.js ~ line 16 ~ newMovieFav ~ res", res)
    }
    
 catch (e) {
    console.error("Error adding document: ", e);
  }
}
