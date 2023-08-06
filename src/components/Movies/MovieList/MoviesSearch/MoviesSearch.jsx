import React, { useEffect, useState } from "react";
import MovieDetails from "../../MovieDetail/MovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "../../../../store/actions/movies/moviesTrending";
import { motion } from "framer-motion";

export const MoviesSearch = () => {
  const dispatch = useDispatch();
  const { listMovies, loading, error } = useSelector((state) => state.searchMovies)
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  const handleMovieCardClickWithSpinner = (ID) => {
    setSelectedMovie(ID);
  };

  if (error) {
    return (
      <div className="text-red-500 text-center text-3xl my-3 bg-black p-1">
        <b>Ocurrió un error:</b> {`${error.code},  ${error.message}`}
      </div>
    );
  }

  if(loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="mx-10 py-8">
      <h2 className="text-6xl text-center mb-7 font-bold text-white bg-black p-2">Búsqueda de Películas</h2>
      {selectedMovie && (
        <MovieDetails
          movieId={selectedMovie}
        />
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {listMovies.map((movie) => (
          <motion.div
            key={movie.id} x
            id={movie.id}
            className="relative rounded-lg shadow-md bg-gray-800 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMovieCardClickWithSpinner(movie.id)}
          >
            {/* Renderizado condicional para mostrar el spinner en la tarjeta seleccionada */}
            {loading && selectedMovie === movie.id && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
              </div>
            )}
            {/* Resto del contenido de la tarjeta */}
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

export default MoviesSearch;