import { db } from "../../../firebase/config";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,

} from "firebase/firestore";
import { setMoviesFav, setError, setLoading } from "../../slices/favoritesMovies";



export const createFavoriteMovie = (idUser) => async (dispatch) => {
  dispatch(setLoading(true));
  console.log(0)
  console.log(idUser)
  try {
    const ref = doc(db, "userData", idUser);
    await setDoc(ref, {
      movies: [],
    });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error));
  }
};  

export const deleteFavoriteMovie = (idUser) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const ref = doc(db, "userData", idUser);
    await setDoc(ref, {
      movies: [],
    });
    dispatch(setLoading(false));
  }
  catch (error) {
    dispatch(setError(error));
  }
};
export const addFavoriteMovie = (idUser, Title, Poster, key) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const ref = doc(db, "userData", idUser);
    const dataFavorite = {
      movieID: key,
      movieData: {
        Title: Title,
        Poster: Poster,
      },
    };
    updateDoc(ref, {
      movies: arrayUnion(dataFavorite),
    });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const getFavoriteMovies = (idUser) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const ref = doc(db, "userData", idUser);
    const docSnap = await ref.get();
    if (docSnap.exists()) {
      const data = docSnap.data();
      dispatch(setMoviesFav(data.movies));
    } else {
      dispatch(createFavoriteMovie([]));
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error));
  }

};