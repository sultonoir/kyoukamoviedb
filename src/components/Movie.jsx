import React from "react";
import Like from "./Like";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Movie = ({ movie, type }) => {
  return (
    <div className="w-[160px] sm:w-[200px] inline-block cursor-pointer relative mx-2">
      <Link to={`/${type}/${movie?.id}`}>
        <picture>
          <LazyLoadImage className="rounded-xl shadow-sm w-full h-full" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title || movie?.name || movie?.original_name} />
        </picture>
        <div className="absolute top-0 left-0 w-full h-full hover:bg-navbar opacity-0 hover:opacity-100 text-huruf rounded-xl">
          <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center px-5">{movie?.name || movie?.title || movie?.original_name}</p>
        </div>
      </Link>
      <div className="absolute top-4 left-4">
        <Like id={`${movie.id}`} title={movie?.name || movie?.title || movie?.original_name} img={movie.poster_path} type={type} />
      </div>
    </div>
  );
};

export default Movie;
