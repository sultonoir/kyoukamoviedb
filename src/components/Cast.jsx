import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Cast = ({ id, type }) => {
  const [castDetails, setCastDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const castMovie = async (id) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=88613ddc587dbef4018d7fc2cf69285e`);
      return response.data.cast;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await castMovie(id);
        setCastDetails(cast.slice(0, 20));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCast();
  }, [id]);

  const truncateString = (str, width) => {
    if (str?.length > width) {
      return str.slice(0, width - 3) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          key={id}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="mySwiper relative"
          breakpoints={{
            // when window width is >= 640px
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
          {castDetails.map((c) => (
            <SwiperSlide key={c.id} className="cursor-grab">
              <picture>
                <LazyLoadImage className="rounded-lg" src={`https://image.tmdb.org/t/p/w500/${c?.profile_path}`} alt={c.original_name} />
              </picture>
              <p className="mt-2">{truncateString(c?.original_name, 13)}</p>
              <p className="text-textsecond text-xs">{truncateString(c?.character || "N/A", 20)}</p>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev my-prev-button absolute left-0 top-0 z-10 cursor-pointer bg-gradient-to-r from-latar-kon w-[70px] md:h-[81%] m flex justify-start items-center">
            <IconArrowLeft className="bg-white text-black rounded-full" aria-hidden="true" />
          </div>
          <div className="swiper-button-next my-next-button absolute right-0 top-0 z-10 cursor-pointer bg-gradient-to-l from-latar-kon w-[81px] md:h-[81%] m flex justify-end items-center">
            <IconArrowRight className="bg-white text-black rounded-full" aria-hidden="true" />
          </div>
        </Swiper>
      )}
    </>
  );
};

export default Cast;
