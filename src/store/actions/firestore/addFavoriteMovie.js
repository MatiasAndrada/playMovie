import { db } from "../../../firebase/config"
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import store from "../..";




export async function addFavoriteMovie (Title, Poster){
console.log("0")
  const idUser = store.getState().authSlice.user.uid
  const data = {
    Title: Title,
    Poster: Poster,
    }
  const ref = doc(db, "moviesFav", idUser)
  await updateDoc(ref, {
    userMoviesFav: arrayUnion(data)
  })
}
