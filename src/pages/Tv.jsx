import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Like from "../components/Like";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=88613ddc587dbef4018d7fc2cf69285e&page=${page}`);
      const results = response.data.results;
      setMovies((prevMovies) => [...prevMovies, ...results]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Helmet>
        <title>Tv | KyOuka</title>
      </Helmet>
      <div className="w-full h-full pt-16 px-3 mb-16 md:mb-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-y-7 gap-x-4">
          {movies.map((movie) => (
            <div className="relative">
              <Link to={`/tv/${movie?.id}`} key={movie.id} className="cursor-pointer relative hover:text-hvr flex flex-col gap-y-2">
                <LazyLoadImage className="w-full h-full rounded-xl" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name} />
                <h1 className="h-16">{movie.name}</h1>
              </Link>
              <div className="absolute top-4 left-4 cursor-pointer">
                <Like id={`${movie.id}`} title={movie?.name || movie?.title || movie?.original_name} img={movie.poster_path} type="tv" />
              </div>
            </div>
          ))}
          {loading && (
            <>
              {[...Array(20)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-gray-200 h-72 w-full rounded-xl"></div>
                  <div className="h-6 bg-gray-200 mt-2 w-1/2 rounded-full"></div>
                </div>
              ))}
            </>
          )}
        </div>
        {!loading && (
          <div className="flex justify-center items-center mb-3 rounded mt-5">
            <button className="bg-prymary hover:bg-hvr text-white px-2 py-1 rounded-md" onClick={handleClick}>
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
