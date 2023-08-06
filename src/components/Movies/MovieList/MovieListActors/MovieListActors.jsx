import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesByActor } from "../../../../store/actions/movies/search/byActor";
const MovieListActors = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, actorInfo } = useSelector((state) => state.actorInfo);
    useEffect(() => {
        dispatch(fetchMoviesByActor(id));
    }, [dispatch, id]);

    if (loading) {
        return (
            <div className="text-white text-center text-3xl my-3 bg-black p-1">
                <b>Cargando...</b>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-center text-3xl my-3 bg-black p-1">
                <b>Ocurrió un error:</b> {`${error.code},  ${error.message}`}
            </div>
        );
    }

    // Calcula la edad del actor
    const calculateAge = (birthDate) => {
        const birthYear = new Date(birthDate).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };

    return (
        <div className="mx-10 py-8">
            <Link to="/" className="flex items-center text-white text-xl mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Volver al inicio
            </Link>
            <hr className="border-2 border-zinc-200 mb-4" />
            <h2 className="text-5xl text-start mb-8 ml-2     font-bold text-white">
                Información de Actor
            </h2>
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-col w-full md:w-1/4 items-center md:items-start md:mr-6">
                    <img
                        className="w-64 h-auto object-center rounded-lg shadow-md"
                        src={`${actorInfo.profile_path}`}
                        alt={actorInfo.name}
                    />
                    <div className="flex flex-col items-center md:items-start mt-4">
                        <h3 className="text-4xl font-semibold text-white">
                            {actorInfo.name}
                        </h3>
                        <p className="text-lg text-gray-300">
                            <b className="text-white">Nacimiento en:</b>{" "}
                            {actorInfo.place_of_birth}
                        </p>
                        <p className="text-2xl text-gray-300">
                            {calculateAge(actorInfo.birthday)} años
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-3/4 mt-4 md:mt-0">
                    <h3 className="text-3xl font-semibold text-white">Biografía:</h3>
                    <p className="text-lg text-gray-300 mt-4">{actorInfo.biography}</p>
                </div>
            </div>
            <h3 className="text-3xl font-semibold mt-8 mb-4 text-white">
                Conocido por:
            </h3>
            <hr className="border-2 border-zinc-200 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {actorInfo.movie_credits?.cast.map((movie) => (
                    <div
                        key={movie.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
                    >
                        <img
                            className="w-38 h-auto  object-center"
                            src={`${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="h-auto p-4 bg-zinc-600 text-white flex flex-col flex-grow">
                            <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                            <p className="text-sm">
                                <span className="font-semibold">Año:</span>{" "}
                                {movie.release_date && movie.release_date.substring(0, 4)}
                            </p>
                            <p className="text-sm">
                                <span className="font-semibold">Personaje:</span>{" "}
                                {movie.character}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieListActors;
