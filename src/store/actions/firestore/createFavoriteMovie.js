import { db } from "../../../firebase/config";
import store from "../..";
import { setDoc, doc } from "firebase/firestore";

export function createFavoriteMovie () {
  const idUser = store.getState().authSlice.user.uid;
  setDoc(doc(db, "userData", idUser), {});
}