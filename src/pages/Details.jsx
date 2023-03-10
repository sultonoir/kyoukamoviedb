import { IconAlarm, IconStarFilled } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router";
import Cast from "../components/Cast";
import Like from "../components/Like";
import Similar from "../components/Similar";
import Video from "../components/Video";

const Details = () => {
  const { id, type } = useParams();
  const [movie, setMovie] = useState(null);

  const detailsMovie = async (id) => {
    try {
      const details = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=88613ddc587dbef4018d7fc2cf69285e`);
      const results = details.data;
      setMovie(results);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    detailsMovie(id);
  }, [id, type]);

  return (
    <div className="w-full h-full mb-16 md:mb-0">
      {movie && (
        <>
          <Helmet>
            <title>{movie?.title || movie?.name}</title>
          </Helmet>
          <div className="w-full h-[550px] text-white mb-2">
            <div className="w-full h-full relative">
              <div className="w-full absolute h-[550px] bg-gradient-to-t from-latar-kon"></div>
              <picture>
                <LazyLoadImage className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie?.title || movie.name} />
              </picture>
            </div>
          </div>
          <div className="flex max-sm:flex-col max-w-5xl m-auto gap-x-5 mb-6 px-3 text-huruf">
            <div className="z-10 flex flex-col sm:gap-y-10 mb-2">
              <LazyLoadImage
                className="
            rounded-lg max-sm:m-auto max-sm:-mt-28 max-sm:mb-5 max-w-xs max-h-60 -mt-28 shadow-lg shadow-black sm:ml-5 z-10 "
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title || movie?.name}
              />
              <div className="flex gap-x-2 justify-center h-[32px]">
                <div className="w-8 h-8 bg-black/25 flex justify-center items-center">
                  <Like id={`${movie.id}`} title={movie?.name || movie?.title || movie?.original_name} img={movie.poster_path} type={type} />
                </div>
                <h3 className="leading-[32px]">Favorite</h3>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl max-sm:m-auto">{movie?.title || movie?.name}</h1>
              <div className="w-full flex flex-wrap gap-2">
                {movie.genres.map((e) => (
                  <a className=" border-prymary border px-2 py-1 rounded-md" key={e.id}>
                    {e.name}
                  </a>
                ))}
              </div>
              <span className="flex gap-x-3">
                <p className="text-prymary">
                  <IconAlarm />{" "}
                </p>
                <p>{movie?.runtime || movie?.last_episode_to_air.runtime || movie?.episode_run_time?.[0]}</p>
                <p className="text-prymary"> Min</p>
              </span>
              <table className="table-auto w-full">
                <tbody>
                  {[
                    { label: "Original name", value: movie?.original_name || movie?.original_title },
                    { label: "Release Date", value: movie?.release_date || movie?.first_air_date },
                    { label: "Popularity", value: movie?.popularity },
                  ].map(({ label, value }, index) => (
                    <tr key={index}>
                      <td className="text-textsecond w-44 font-medium pr-4">{label}</td>
                      <td className="text-huruf">: {value}</td>
                    </tr>
                  ))}
                  {movie?.number_of_episodes && (
                    <tr>
                      <td className="text-textsecond w-44 font-medium pr-4">Episode</td>
                      <td className="text-huruf">: {movie?.number_of_episodes}</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <span className="flex gap-x-3">
                <IconStarFilled className="text-yellow-600" />
                {movie?.vote_average}
              </span>
              <h4>{movie?.overview}</h4>
            </div>
          </div>
          <h2 className="font-bold text-2xl mb-5 max-w-5xl m-auto px-3 text-prymary">Cast</h2>
          <div className="max-w-5xl m-4 lg:m-auto">
            <Cast id={id} type={type} />
          </div>
          <Video id={id} type={type} />
          <h2 className="font-bold text-2xl mb-5 max-w-5xl m-auto px-3 text-prymary">Similar Movie</h2>
          <div className="max-w-5xl m-4 lg:m-auto">
            <Similar id={id} type={type} />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
