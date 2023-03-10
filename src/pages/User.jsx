import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../components/Firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { IconTrash } from "@tabler/icons-react";

const User = () => {
  const [movie, setMovie] = useState([]);
  const { user } = UserAuth();
  const movieRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovie(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const deleteShow = async (passedID) => {
    try {
      const result = movie.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, { savedShows: result });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-[350px] text-white mb-2 relative">
        <div className="w-full h-full">
          <div className="w-full absolute h-[350px] bg-gradient-to-r from-latar-kon"></div>
          <LazyLoadImage
            className="w-full h-full object-cover"
            src={"https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/d018d3cd-2602-44a4-a9e2-5b66e5fef473/ID-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg"}
          />
          <div className="absolute bottom-5 left-5">
            <h1 className="text-huruf text-5xl">My favorite</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full pt-16 px-3 mb-16 md:mb-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-y-7 gap-x-4 relative">
          {movie.map((m) => (
            <div className="relative">
              <Link to={`/${m.type}/${m?.id}`} key={m.id} className="cursor-pointer relative hover:text-hvr flex flex-col gap-y-2">
                <picture>
                  <LazyLoadImage className="w-full h-full rounded-xl" src={`${`https://image.tmdb.org/t/p/w500/${m.img}`}`} alt={m.title} />
                </picture>
                <h1 className="h-16">{m.title}</h1>
              </Link>
              <div className="absolute top-4 left-4 cursor-pointer" onClick={() => deleteShow(m.id)}>
                <IconTrash className="bg-prymary hover:bg-hvr px-1 py-1 w-8 h-8 text-white rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
