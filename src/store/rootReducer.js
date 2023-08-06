
import { combineReducers } from "redux";
//!SLICES
//search
import SearchMoviesSlice from "./slices/searchMovies/byMovie";
import  actorInfoSlice  from "./slices/searchMovies/byActor";
//trending
import TrendingMoviesSlice from "./slices/trendingsMovies/index";
import MovieDetailSlice from "./slices/detailsMovie/index";
import favoritesMoviesSlice from "./slices/favoritesMovies/index";
import authSlice from './slices/auth/index';


const rootReducer = combineReducers({
    trendingMovies: TrendingMoviesSlice,
    searchMovies: SearchMoviesSlice,
    actorInfo: actorInfoSlice,
    detailMovie: MovieDetailSlice,
    favoriteMovies: favoritesMoviesSlice,
    auth: authSlice
});

export default rootReducer;
