import { db } from "../../../firebase/config";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  deleteField,
} from "firebase/firestore";
//redux


export function createFavoriteMovie(idUser) {
  setDoc(doc(db, "userData", idUser), {});
}

export async function deleteFavoriteMovie(idUser) {
  const ref = doc(db, "userData", idUser);
  await updateDoc(ref, {
    movies: deleteField(),
  });
}

export async function writeFavoriteMovie(idUser, Title, Poster, key) {
  const ref = doc(db, "userData", idUser);
  const dataFavorite = {
    movieID: key,
    movieData: {
      Title: Title,
      Poster: Poster,
    },
  };
  await updateDoc(ref, {
    movies: arrayUnion(dataFavorite),
  });
}
