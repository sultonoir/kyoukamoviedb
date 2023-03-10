import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID, type }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetchURL);
      setMovies(response.data.results);
    };
    fetchMovies();
  }, [fetchURL]);

  const handleSlide = (direction) => {
    const slider = document.getElementById(`slider${rowID}`);
    const scrollAmount = 1700 * direction;
    slider.scrollLeft += scrollAmount;
  };

  return (
    <div className="mb-16 md:mb-0">
      <div className="flex justify-between h-12 p-2 w-full mb-[7px]">
        <h2 className="text-huruf font-jak ml-4 font-bold md:text-xl">{title}</h2>
        <Link to={`/${type}`} className="bg-prymary text-white hover:bg-red-700 px-2 py-1 rounded-lg">
          View more
        </Link>
      </div>
      <div className="relative flex items-center group">
        <IconArrowLeft onClick={() => handleSlide(-1)} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 text-black cursor-pointer z-10 group-hover:block hidden" />
        <div id={`slider${rowID}`} className="w-full h-full overflow-x-scroll scrollbar-hide snap-x whitespace-nowrap scroll-smooth overflow-y-hidden">
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} type={type} />
          ))}
        </div>
        <IconArrowRight onClick={() => handleSlide(1)} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 text-black cursor-pointer z-10 group-hover:block right-0 hidden" />
      </div>
    </div>
  );
};

export default Row;
