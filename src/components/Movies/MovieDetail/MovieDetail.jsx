import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { fetchMovieDetail } from "../../../store/actions/movies/movieDetail";
import {
  AiOutlineClose,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineCalendar,
  AiOutlineTags,
} from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const MovieDetail = ({ movieId }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSpecialExpanded, setSpecialExpanded] = useState(false);
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.detailMovie);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    setShowModal(true);
  }, [dispatch, movieId]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (movieDetail.loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (movieDetail.error) {
    return (
      <div className="text-white">
        Something went wrong: {movieDetail.error.message}
      </div>
    );
  }

  const movieData = movieDetail.objectMovieDetail;
  const duration = movieData.runtime;
  const trailerKey = movieData.videos?.results[0]?.key;
  const genres = movieData.genres?.map((genre) => genre.name).join(", ");
  const productionCompanies = movieData.production_companies
    ?.map((company) => company.name)
    .join(", ");
  const year = movieData.release_date?.split("-")[0];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const containerVariants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Movie Detail"
        className="absolute top-0 left-0 right-0 bottom-0 flex w-10/12 h-4/6 m-auto mt-160px bg-black"
      >
        <div className="flex flex-col">
          <div className="flex-1 flex justify-center items-center">
            {trailerKey && (
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                title="Trailer"
                frameBorder="0"
                className="w-2/3 h-2/3"
                allowFullScreen
              ></iframe>
            )}

            <div className="bg-gray-800 text-white p-4 w-1/3 h-100">
              <div className="flex items-center mb-4">
                <img
                  className="w-32 h-48 object-cover rounded-lg mr-4"
                  src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                  alt={movieData.title}
                />

                <h2 className="text-3xl font-medium">{movieData.title}</h2>
              </div>
              <div className="d-flex flex-col  justify-between">

                  <p className={`${window.innerWidth > 400 ? "scrollbar" : ""
                    } max-h-48 overflow-y-auto text-md`}>{movieData.overview}</p>


                  <ul>
                    <li className="flex items-center mb-2">
                      <BiTimeFive className="text-3xl mr-2" />
                      {duration ? (
                        <p className="text-md">{duration} min</p>
                      ) : (
                        <p className="text-md">No disponible</p>
                      )}
                    </li>
                    <li className="flex items-center mb-2">
                      <AiOutlineCalendar className="text-3xl mr-2" />
                      {year ? (
                        <p className="text-md">{year}</p>
                      ) : (
                        <p className="text-md">No disponible</p>
                      )}
                    </li>
                    <li className="flex items-center mb-2">
                      <AiOutlineTags className="text-3xl mr-2" />
                      {genres ? (
                        <p className="text-md">{genres}</p>
                      ) : (
                        <p className="text-md">No disponible</p>
                      )}
                    </li>
                  </ul>

              </div>
            </div>
          </div>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out absolute top-2 right-2"
            onClick={handleCloseModal}
          >
            <AiOutlineClose />
          </button>
          <div className="bg-gray-800 text-white p-2">
            <div className="flex items-center justify-center mb-1 text-3xl">
              {isSpecialExpanded ? (
                <AiOutlineUp
                  onClick={() => setSpecialExpanded(false)}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineDown
                  onClick={() => setSpecialExpanded(true)}
                  className="cursor-pointer"
                />
              )}
            </div>
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate={isSpecialExpanded ? "open" : "closed"}
              className="overflow-hidden"
            >
              {isSpecialExpanded && (
                <div className="flex flex-wrap mt-4">
                  <div className="flex flex-col w-1/2">
                    <h4 className="text-lg font-bold">Géneros</h4>
                    <p>{genres}</p>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <h4 className="text-lg font-bold">
                      Compañías de producción
                    </h4>
                    <p>{productionCompanies}</p>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <h4 className="text-lg font-bold">Duración</h4>
                    <p>{duration} min</p>
                  </div>
                  <h3 className="text-xl font-bold my-4">
                    Imágenes adicionales
                  </h3>
                  <Slider {...settings}>
                    {movieData.images?.backdrops &&
                      movieData.images.backdrops.map((image, index) => (
                        <img
                          key={index}
                          className="w-full h-auto rounded-lg"
                          src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                          alt={`Backdrop ${index}`}
                        />
                      ))}
                  </Slider>
                  <h3 className="text-xl font-bold my-4">Elenco</h3>
                  <Slider {...settings}>
                    {movieData.credits?.cast &&
                      movieData.credits.cast.map((actor, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center"
                        >
                          <img
                            className="w-32 h-48 object-cover rounded-lg"
                            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                            alt={actor.name}
                          />
                          <p className="text-lg">{actor.name}</p>
                        </div>
                      ))}
                  </Slider>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MovieDetail;
