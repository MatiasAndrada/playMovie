import { db } from "../../../firebase/config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import store from "../..";

export async function writeFavoriteMovie(Title, Poster, key) {
  const idUser = store.getState().authSlice.user.uid;
  const ref = doc(db, "userData", idUser);
  const dataFavorite = {
  movieID: key,
  movieData: {
    Title: Title,
    Poster: Poster,
  },
}
  await updateDoc(ref, {
  movies: arrayUnion(dataFavorite)   
  });
}
