import React, { useEffect, useState } from "react";
import MovieDetails from "../MovieDetail/MovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../../store/actions/movies/moviesTrending";
import { motion } from "framer-motion";
//import { Tilt } from "react-tilt";

const MoviesTrending = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => state.trendingMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  const handleMovieClick = (ID) => {
    console.log("ID", ID);
    setSelectedMovie(ID);
  };

  if (trendingMovies.loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (trendingMovies.error) {
    return (
      <div className="text-white">
        Something went wrong: {trendingMovies.error.message}
      </div>
    );
  }

  return (
    <div className="mx-10 py-8">
      <h2 className="text-5xl text-center mb-7 font-bold text-white">Trending Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {selectedMovie && (
          <MovieDetails
            movieId={selectedMovie}
            
          />
        )}
        {trendingMovies.listMovies.map((movie) => (
          <motion.div
            key={movie.id}
            className="relative rounded-lg shadow-md bg-gray-800 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMovieClick(movie.id)}
          >
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-white font-bold text-lg">{movie.title}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoviesTrending;