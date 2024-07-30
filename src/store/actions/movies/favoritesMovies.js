import { db } from "../../../firebase/config";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import {
  setMoviesFav,
  setError,
  setLoading,
} from "../../slices/favoritesMovies";

export const getFavoriteMovies = (idUser) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const docRef = doc(db, "userData", idUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      dispatch(setMoviesFav(data.movies));
    } else {
      dispatch(createFavoriteMovie([]));
    }
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const createFavoriteMovie = (idUser) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const ref = doc(db, "userData", idUser);
    await setDoc(ref, {
      movies: [],
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteFavoriteMovie = (idUser) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const ref = doc(db, "userData", idUser);
    await setDoc(ref, {
      movies: [],
    });
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addFavoriteMovie =
  (idUser, Title, Poster, key) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      //verificar si el usuario tiene una lista de favoritos, si no tiene crearla
      const docRef = doc(db, "userData", idUser);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        //si existe el usuario, agregar la película a la lista de favoritos
        const ref = doc(db, "userData", idUser);
        await updateDoc(ref, {
          movies: arrayUnion({
            title: Title,
            poster: Poster,
            key: key,
          }),
        });
      } else {
        //si no existe el usuario, crear la lista de favoritos y agregar la película
        const ref = doc(db, "userData", idUser);
        await setDoc(ref, {
          movies: [
            {
              title: Title,
              poster: Poster,
              movieId: key,
            },
          ],
        });
      }
      dispatch(getFavoriteMovies(idUser));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const deleteFavoriteMovieById =
  (idUser, movieId) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const userRef = doc(db, "userData", idUser);
      const userSnapshot = await getDoc(userRef);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const updatedMovies = userData.movies.filter(
          (movie) => movie.key !== movieId
        );
        await updateDoc(userRef, {
          movies: updatedMovies,
        });

        dispatch(getFavoriteMovies(idUser));
      }
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
export const deleteFavoriteMovies = (idUser) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const ref = doc(db, "userData", idUser);
    await updateDoc(ref, {
      movies: [],
    });
    dispatch(getFavoriteMovies(idUser));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
