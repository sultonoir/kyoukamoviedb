import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "./Firebase";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Like = ({ id, title, img, type }) => {
  const navigate = useNavigate();
  const [movieLike, setMovieLike] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user && user.email) {
      setMovieLike(!movieLike);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: id,
          title: title,
          img: img,
          type: type,
        }),
      });
    } else {
      navigate(`/Login`);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      const savedShows = doc.data()?.savedShows || [];
      const isMovieLiked = savedShows.some((show) => show.id === id);
      setMovieLike(isMovieLiked);
    });
    return () => {
      unsubscribe();
    };
  }, [user?.email, id]);

  return <p onClick={saveShow}>{movieLike ? <IconHeartFilled className="text-prymary" /> : <IconHeart className="text-prymary" />}</p>;
};

export default Like;
