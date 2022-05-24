import { configureStore } from '@reduxjs/toolkit';
import movieSlice from "./slices/movie/index";
import authSlice from './slices/auth/index';
import favouriteListSlice from './slices/firestore/userFavouriteList';


export default configureStore({
  reducer: {
    movieSlice,
    authSlice,
    favouriteListSlice,
  },
});
