import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { setMovieFav } from "../../slices/movie/";



export const readFavoriteMovie = (idUser) => async (dispatch) =>{
   console.log("0")
   console.log(idUser)
   try{
   await onSnapshot(doc( db,  "moviesFav", "MnsIxkIILYYV5SwmIND6kEOopnK2"), (doc) =>{ 
      dispatch(setMovieFav(doc.data())) 
      console.log(doc.data())
   })
   } catch (err){
console.log(err)
   }
}
        
