import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import {
  fetchMovieDetail,
  movieDetailReset,
} from "../../../store/actions/movies/movieDetail";

//favorites movies
import { addFavoriteMovie, deleteFavoriteMovieById } from "../../../store/actions/movies/favoritesMovies";

import { useNavigate } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineCalendar,
  AiOutlineTags,
  AiOutlineEye,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { VideoPlayer } from "../../CustomPlayer/VideoPlayer";

import { BiTimeFive } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const MovieDetail = ({ movieId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isSpecialExpanded, setSpecialExpanded] = useState(false);
  const [hoveredActorId, setHoveredActorId] = useState(null);
  const { user, activo } = useSelector((state) => state.auth);
  const { objectMovieDetail, error, loading } = useSelector(
    (state) => state.detailMovie
  );
  const listMoviesFav = useSelector((state) => state.favoriteMovies.listMoviesFav)

  console.log("idMovie", movieId)
  console.log("listMoviesFav", listMoviesFav)
  const isFavorite = listMoviesFav.find((movie) => movie.key === movieId)
  console.log("isFavorite", isFavorite)



  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    setShowModal(true);
  }, [dispatch, movieId]);

  const handleCloseModal = () => {
    setShowModal(false);
    dispatch(movieDetailReset());
  };

  const formatYear = objectMovieDetail.release_date?.split("-")[0];
  const formatRuntime = objectMovieDetail.runtime?.toString() + " min";
  const formatGenres =
    objectMovieDetail.genres?.map((genre) => genre.name).join(", ") || "";

  const formatCountries =
    objectMovieDetail.production_countries
      ?.map((country) => country.name)
      .join(", ") || "";

  const formatProductionCompanies =
    objectMovieDetail.production_companies
      ?.map((company) => company.name)
      .join(", ") || "";

  const formatActors = objectMovieDetail.credits?.cast
    ? objectMovieDetail.credits.cast.filter(
      (actor) => actor.name && actor.profile_path && actor.character && actor.id
    )
    : [];
  const formatDirector = objectMovieDetail.credits?.crew
    ? objectMovieDetail.credits.crew
      .filter((crew) => crew.job === "Director")
      .map((director) => director.name)
      .join(", ")
    : "";
  function FindActorMovies(actorId) {
    navigate(`/searchByActor/${actorId}`);
  }
  function handleAddFavoriteMovie(title, poster, movieId) {
    dispatch(addFavoriteMovie(user.uid, title, poster, movieId));
  }



  if (error) {
    return (
      <div className="text-red-500 text-center text-3xl my-3 bg-black p-1">
        <b>Ocurrió un error:</b> {`${error.code},  ${error.message}`}
      </div>
    );
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
        isOpen={showModal && !loading}
        onRequestClose={handleCloseModal}
        contentLabel="Movie Detail"
        className="absolute top-0 left-0 right-0 bottom-0 flex w-10/12 h-4/6 m-auto mt-160px bg-black"
      >
        <div className="flex flex-col w-full">
          <div className="flex-1 flex justify-center items-center">
            <div className="w-2/3 h-full">
              {objectMovieDetail.videos?.results && objectMovieDetail.videos.results.length > 0 ? (
                <VideoPlayer
                  src={`https://www.youtube.com/watch?v=${objectMovieDetail.videos.results[0].key}`}
                />
              ) : (
                <h3 className="text-white text-3xl font-bold d-flex justify-center 
                items-center h-full" >
                  No hay trailer disponible
                </h3>

              )}
            </div>
            <div className="bg-gray-800 text-white p-4 w-1/3 h-100">
              <div className="flex items-center mb-4 h-1/3 mt-2">
                {objectMovieDetail.poster_path ? (
                  <img
                    className="w-32 h-48 object-cover rounded-lg mr-4"
                    src={`https://image.tmdb.org/t/p/w500/${objectMovieDetail.poster_path}`}
                    alt={objectMovieDetail.title}
                  />
                ) : (
                  <p>Error: Póster no disponible</p>
                )}
                <div className="flex flex-col justify-between h-full">
                  <h2 className="text-3xl font-medium w-86">
                    {objectMovieDetail.title}
                  </h2>
                  {activo ? (
                    listMoviesFav?.length !== undefined && listMoviesFav.length !== 0 ? (
                      isFavorite ? (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center text-white text-xl bg-red-500 px-4 py-2 rounded-lg"
                          onClick={() =>
                            dispatch(deleteFavoriteMovieById(user.uid, movieId))
                          }
                        >
                          <AiFillHeart className="mr-2" />
                          Eliminar de favoritos
                        </motion.button>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center text-white text-xl bg-red-500 px-4 py-2 rounded-lg"
                          onClick={() =>
                            handleAddFavoriteMovie(
                              objectMovieDetail.title,
                              objectMovieDetail.poster_path,
                              objectMovieDetail.id
                            )
                          }
                        >
                          <AiOutlineHeart className="mr-2" />
                          Agregar a favoritos
                        </motion.button>
                      )
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center text-white text-xl bg-red-500 px-4 py-2 rounded-lg"
                        onClick={() =>
                          handleAddFavoriteMovie(
                            objectMovieDetail.title,
                            objectMovieDetail.poster_path,
                            objectMovieDetail.id
                          )
                        }
                      >
                        <AiOutlineHeart className="mr-2" />
                        Agregar a favoritos
                      </motion.button>
                    )
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center text-white text-xl bg-red-500 px-4 py-2 rounded-lg"
                      onClick={() => navigate("/login")}
                    >
                      <AiOutlineHeart className="mr-2" />
                      Agregar a favoritos
                    </motion.button>
                  )}

                </div>
              </div>

              <div className="flex flex-col h-2/3  
               justify-around">
                <p
                  className={`${window.innerWidth > 400 ? "scrollbar" : ""
                    } max-h-48 overflow-y-auto text-md`}
                >
                  {objectMovieDetail.overview}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <li className="flex items-center mb-2">
                    <BiTimeFive className="text-3xl mr-2" />
                    {formatRuntime ? (
                      <p className="text-md">{formatRuntime}</p>
                    ) : (
                      <p className="text-md">No disponible</p>
                    )}
                  </li>
                  <li className="flex items-center mb-2">
                    <AiOutlineCalendar className="text-3xl mr-2" />
                    {formatYear ? (
                      <p className="text-md">{formatYear}</p>
                    ) : (
                      <p className="text-md">No disponible</p>
                    )}
                  </li>
                  <li className="flex items-center mb-2">
                    <AiOutlineTags className="text-3xl mr-2" />
                    {formatGenres ? (
                      <p className="text-md">{formatGenres}</p>
                    ) : (
                      <p className="text-md">No disponible</p>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            className="bg-red-500 text-white py-2 px-1 rounded hover:bg-red-700 hover:scale-105 transition duration-300 ease-in-out absolute top-2 right-2"
            onClick={handleCloseModal}
          >
            <AiOutlineClose />
          </button>
          <div className="d-flex flex-col z-10">
            <button
              className="bg-blue-500 text-white w-full flex items-center justify-center hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={() => setSpecialExpanded(!isSpecialExpanded)}
            >
              {isSpecialExpanded ? (
                <AiOutlineDown className="text-2xl" />
              ) : (
                <AiOutlineUp className="text-2xl" />
              )}
            </button>

            <motion.div
              variants={containerVariants}
              initial="closed"
              animate={isSpecialExpanded ? "open" : "closed"}
              className="overflow-hidden mb-4 absolute bottom-0 w-full  bg-gray-800 text-white  h-1/2 d-flex"
            >
              <div className="w-4/6">
                <h3 className="text-2xl font-medium">Actores:</h3>
                <Slider {...sliderSettings} className="ml-2">
                  {formatActors.map((actor) => (
                    <div
                      key={actor.id}
                      className="relative w-32 h-48 mr-1 cursor-pointer d-flex flex-col items-center justify-center"
                      onMouseEnter={() => setHoveredActorId(actor.id)}
                      onMouseLeave={() => setHoveredActorId(null)}
                    >
                      <img
                        className="w-3/4 h-3/4 object-cover transition-opacity duration-300"
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        alt={actor.name}
                      />
                      {/* Fondo oscuro con transparencia */}
                      <div
                        className={`${actor.id === hoveredActorId
                          ? "bg-black opacity-60"
                          : "opacity-0"
                          } absolute w-3/4 h-3/4 transition-opacity duration-300`}
                        onClick={() => FindActorMovies(actor.id)}
                      />
                      <div className="absolute w-3/4 h-3/4 text-white flex flex-col items-center justify-center">
                        <h3
                          className={`text-md text-center ${actor.id === hoveredActorId
                            ? "opacity-100"
                            : "opacity-0"
                            } transition-opacity duration-300`}
                        >
                          Actor: <br /> {actor.name}
                        </h3>
                        <p
                          className={`text-sm text-center ${actor.id === hoveredActorId
                            ? "opacity-100"
                            : "opacity-0"
                            } transition-opacity duration-300`}
                        >
                          Papel:
                          <br /> {actor.character}
                        </p>
                        <div
                          className={`absolute right-1 top-1 hover:bg-blue-500 hover:p-1 hover:rounded-full transition duration-500 ease-in-out ${actor.id === hoveredActorId
                            ? "opacity-100"
                            : "opacity-0"
                            } transition-opacity duration-300`}
                        >
                          <AiOutlineEye
                            className="text-3xl"
                            onClick={() => FindActorMovies(actor.id)}
                          />
                        </div>
                      </div>
                      {/* Nombre del actor */}
                      {actor.id === hoveredActorId ? null : (
                        <div
                          className="absolute bottom-5 left-4  w-3/4 
                      "
                        >
                          <p className="font-bold text-sm  bg-black/50 rounded-full inline">
                            {actor.name}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-1/4 ml-10">
                <h3 className="text-2xl font-medium">Director:</h3>
                <p className="text-md">{formatDirector} </p>
                <h3 className="text-2xl font-medium">
                  Compañías de producción:
                </h3>
                <p className="text-md">{formatProductionCompanies}</p>
                <h3 className="text-2xl font-medium">País de producción:</h3>
                <p className="text-md">{formatCountries}</p>
              </div>
            </motion.div>
          </div>
        </div >
      </Modal >
    </>
  );
};
export default MovieDetail;
