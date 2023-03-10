import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";
import apiconfig from "../api/apiConfig";
import Modal from "./Modal";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(apiconfig.requestUpcoming).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="w-full h-[550px] text-white mb-2">
      <div className="w-full h-full">
        <div className="w-full absolute h-[550px] bg-gradient-to-r from-latar-kon"></div>
        <LazyLoadImage className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className="absolute max-w-2xl top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl text-huruf">{truncateString(movie?.title, 150)}</h1>
          <div className="my-4 flex">
            <button onClick={() => handleDetails(movie?.id)} className="border text-huruf border-prymary py-2 px-5 rounded-lg">
              Details
            </button>
            <Modal movieId={movie?.id}></Modal>
          </div>
          <h2 className="text-textsecond">Release {movie?.release_date}</h2>
          <p className="text-huruf">{truncateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
