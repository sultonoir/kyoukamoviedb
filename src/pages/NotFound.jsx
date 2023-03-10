import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const NotFound = () => {
  return (
    <div className="max-w-5xl p-2 h-sc m-auto">
      <LazyLoadImage className="w-screen h-screen" src="/404.svg" alt="" />
    </div>
  );
};

export default NotFound;
