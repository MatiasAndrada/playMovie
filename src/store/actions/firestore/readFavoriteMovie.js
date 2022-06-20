import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import store from "../..";
import { setMovieFav } from "../../slices/movie/";



export const readFavoriteMovie  = async (dispatch) =>{
   const idUser = store.getState().authSlice.user.uid
   try{
   await onSnapshot(doc( db,  "moviesFav", idUser), (doc) =>{ 
      dispatch(setMovieFav(doc.data())) 
      console.log(doc.data())
   })
   } catch (err){
console.log(err)
   }
}
