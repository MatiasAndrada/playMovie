import { db } from "../../../firebase/config";
import { updateDoc, deleteField, doc } from "firebase/firestore";
import store from "../..";

export async function deleteFavoriteMovie() {

  const idUser = store.getState().authSlice.user.uid;
  const ref = doc(db, "userData", idUser);
  await updateDoc(ref, {
    movies: deleteField()
});
  }
