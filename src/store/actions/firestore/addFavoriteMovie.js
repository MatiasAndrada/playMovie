import { db } from "../../../firebase/config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
/* import { arrayUnion, doc, setDoc } from "firebase/firestore"; */
import store from "../../";

export function addFavoriteMovie(Title, Poster, key) {
  console.log("0")
  const idUser = store.getState().authSlice.user.uid;
  const data = {
    Title: Title,
    Poster: Poster,
    key: key,
  };
  const ref = doc(db, "userData", idUser);
   updateDoc(ref, {
    userMoviesFav: arrayUnion(data),
  });
}
