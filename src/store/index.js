import { configureStore } from '@reduxjs/toolkit';
import movieSlice from "./slices/movie/index";

export default configureStore({
  reducer: {
    movieSlice,
  },
});
