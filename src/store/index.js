import { configureStore } from '@reduxjs/toolkit';
import movieSlice from "./slices/movie/index";
import authSlice from './slices/auth/index';


export default configureStore({
  reducer: {
    movieSlice,
    authSlice,

  },
});
