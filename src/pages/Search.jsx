import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useParams } from "react-router";
import Like from "../components/Like";

const Search = () => {
  const { query } = useParams();
  const [movieSearch, setMovieSearch] = useState();
  const [tvSearch, setTvSearch] = useState();
  const navigate = useNavigate();

  const getSearch = async (query, type) => {
    try {
      let searchQuery;
      switch (type) {
        case "movie":
          searchQuery = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=88613ddc587dbef4018d7fc2cf69285e&language=en-US&query=${query}`);
          setMovieSearch(searchQuery.data.results);
          break;
        case "tv":
          searchQuery = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=88613ddc587dbef4018d7fc2cf69285e&language=en-US&query=${query}`);
          setTvSearch(searchQuery.data.results);
          break;
        default:
          throw new Error("Invalid type");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearch(query, "movie");
    getSearch(query, "tv");
  }, [query]);

  const handleDetails = (id, type) => {
    navigate(`/${type}/${id}`);
  };

  const hasil = (movieSearch && movieSearch.length) + (tvSearch && tvSearch.length);

  return (
    <div
      className={`px-4 pt-16 w-full ${hasil <= 2 ? "h-screen" : ""}
    ${hasil <= 7 ? "h-full sm:h-screen" : ""} `}
    >
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {movieSearch?.map((movie) => (
          <div key={movie.id} className="cursor-pointer relative">
            <LazyLoadImage className="w-full h-full rounded-xl mb-2" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-navbar opacity-0 hover:opacity-100 text-huruf rounded-xl">
              <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center p-2 " onClick={() => handleDetails(movie.id, "movie")}>
                {movie.title}
              </p>
            </div>
            <div className="absolute top-4 left-4">
              <Like id={`${movie.id}`} title={movie?.name || movie?.title || movie?.original_name} img={movie.poster_path} type="movie" />
            </div>
          </div>
        ))}
        {tvSearch?.map((movie) => (
          <div key={movie.id} className="cursor-pointer relative">
            <LazyLoadImage className="w-full h-full rounded-xl mb-2" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.name} />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-navbar opacity-0 hover:opacity-100 text-huruf rounded-xl">
              <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center p-2 " onClick={() => handleDetails(movie.id, "tv")}>
                {movie.name}
              </p>
            </div>
            <div className="absolute top-4 left-4">
              <Like id={`${movie.id}`} title={movie?.name || movie?.title || movie?.original_name} img={movie.poster_path} type="tv" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
