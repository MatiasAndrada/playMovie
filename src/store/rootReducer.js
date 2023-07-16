
import { combineReducers } from "redux";
//slices
import SearchMoviesSlice from "./slices/searchMovies/index";
import TrendingMoviesSlice from "./slices/trendingsMovies/index";
import MovieDetailSlice from "./slices/detailsMovie/index";
import favoritesMoviesSlice from "./slices/favoritesMovies/index";
import authSlice from './slices/auth/index';


const rootReducer = combineReducers({
    trendingMovies: TrendingMoviesSlice,
    searchMovies: SearchMoviesSlice,
    detailMovie: MovieDetailSlice,
    favoriteMovies: favoritesMoviesSlice,
    auth: authSlice
});

export default rootReducer;
