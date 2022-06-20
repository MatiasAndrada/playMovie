import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import store from "../..";
import { setMovieFav } from "../../slices/movie/";



export const readFavoriteMovie  =  (dispatch) =>{
   const idUser = store.getState().authSlice.user.uid
    onSnapshot(doc( db,  "userData", idUser), (doc) =>{ 
      const arrayMovies = doc.data().userMoviesFav
      dispatch(setMovieFav(arrayMovies)) 
   })
}
