import { db } from "../../../firebase/config"
import {doc, updateDoc, deleteField} from "firebase/firestore";
import store from "../..";


export async function deleteFavoriteMovie(key) {
    const idUser = store.getState().authSlice.user.uid;
    const ref = doc(db, "userData", idUser);
    await updateDoc(ref, {
      userMoviesFav: deleteField(key),
    });
  }