import React from "react";
import { Helmet } from "react-helmet";
import apiConfig from "../api/apiConfig";
import Hero from "../components/Hero";
import Row from "../components/Row";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>KyOuka</title>
      </Helmet>
      <Hero />
      <Row rowID="1" title="Movie Up Coming" fetchURL={apiConfig.requestUpcoming} type={"movie"} />
      <Row rowID="2" title="Movie Trending" fetchURL={apiConfig.requestTrending} type={"movie"} />
      <Row rowID="3" title="Movie Popular" fetchURL={apiConfig.requestPopular} type={"movie"} />
      <Row rowID="4" title="Movie Top Rated" fetchURL={apiConfig.requestTopRated} type={"movie"} />
      <Row rowID="5" title="Tv Airing Today" fetchURL={apiConfig.requestUpcomingTV} type={"tv"} />
      <Row rowID="6" title="Tv Trending" fetchURL={apiConfig.requestTrendingTV} type={"tv"} />
      <Row rowID="7" title="Tv Popular" fetchURL={apiConfig.requestPopularTV} type={"tv"} />
      <Row rowID="8" title="Tv Top Rated" fetchURL={apiConfig.requestTopRatedTV} type={"tv"} />
    </div>
  );
};

export default Home;
