import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation]);

const Similar = ({ id, type }) => {
  const [similarMovie, setSimilarMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getSimilarMovie = async (id) => {
    const sim = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=88613ddc587dbef4018d7fc2cf69285e`);
    return sim.data.results;
  };

  useEffect(() => {
    getSimilarMovie(id).then((sim) => {
      setSimilarMovie(sim);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          key={id}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 3.5,
              spaceBetween: 10,
              slidesPerGroup: 3,
            },
            400: {
              slidesPerView: 4.5,
              spaceBetween: 10,
              slidesPerGroup: 4,
            },
            640: {
              slidesPerView: 5.5,
              spaceBetween: 10,
              slidesPerGroup: 5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6.5,
              spaceBetween: 10,
              slidesPerGroup: 6,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 7.5,
              spaceBetween: 10,
              slidesPerGroup: 7,
            },
          }}
        >
          {similarMovie.map((c) => (
            <SwiperSlide key={c.id}>
              <picture>
                <LazyLoadImage className="rounded-lg" src={`https://image.tmdb.org/t/p/w500/${c?.poster_path}`} alt={c.title} />
              </picture>
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-lg">
                <Link to={`/${type}/${c.id}`} className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center p-2 cursor-pointer">
                  {c?.title || c?.name}
                </Link>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev my-prev-button m absolute left-0 top-[50%] z-10 translate-y-[-50%] cursor-pointer bg-gradient-to-r from-latar-kon w-[70px] h-[101%] flex justify-start items-center">
            <IconArrowLeft className="bg-white text-black rounded-full" aria-hidden="true" />
          </div>
          <div className="swiper-button-next my-next-button m absolute right-0 top-[50%] z-10 translate-y-[-50%] cursor-pointer bg-gradient-to-l from-latar-kon w-[70px] h-[101%] flex justify-end items-center">
            <IconArrowRight className="bg-white text-black rounded-full" aria-hidden="true" />
          </div>
        </Swiper>
      )}
    </>
  );
};

export default Similar;
