import db from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { setMovieFavourite } from "../../slices/firestore/userFavouriteList/index";

export const addFavouriteMovie = (Title, Poster) => async (dispatch) => {
  console.log("0");
  try {
    dispatch(setMovieFavourite(Title, Poster))
    const docRef = await addDoc(collection(db, "users"),{
      Title: "",
      Poster: "", 
    });
    console.log(docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
