import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Video = ({ id, type }) => {
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVideo = async (id) => {
    const vid = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=88613ddc587dbef4018d7fc2cf69285e&language=en-US`);
    return vid.data;
  };

  useEffect(() => {
    getVideo(id).then((vid) => {
      setVideo(vid);
      setLoading(false);
    });
  }, [id]);

  const trailer = video.results?.filter((item) => item.type === "Trailer")[0];

  return (
    <div className="px-3">
      {loading ? (
        <div key={trailer} className="animate-pulse">
          <div className="bg-gray-200 h-[315px] w-[560px] rounded-xl"></div>
        </div>
      ) : trailer ? (
        <div className=" max-w-5xl m-auto pb-5">
          <h1 className="font-bold text-2xl text-prymary mb-5">Trailer</h1>
          <div className="flex justify-center">
            <iframe title={trailer.name} width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      ) : (
        <div className="max-w-5xl m-auto pt-5 flex justify-center">
          <p className="font-bold uppercase text-3xl">No trailer available</p>
        </div>
      )}
    </div>
  );
};

export default Video;
