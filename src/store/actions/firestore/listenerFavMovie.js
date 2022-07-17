import { db } from "../../../firebase/config";
import { onSnapshot, doc } from "firebase/firestore";
import store from "../..";

import { setUserMoviesFav } from "../../slices/movie";

export function listenerFavMovies () {
  const idUser = store.getState().authSlice.user.uid;
  onSnapshot(
    doc(db, "userData", idUser),
    (snapshot) => {
      const array = snapshot.data().movies;
      if (array === undefined) {
      store.dispatch(setUserMoviesFav([]));
      }else(
        store.dispatch(setUserMoviesFav(array))
        )
    },
    (error) => {
      console.log(error);
    }
  );
};
