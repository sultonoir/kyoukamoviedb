const key = "88613ddc587dbef4018d7fc2cf69285e";
const page = 1;
const tv = "tv";
const movie = "movie";

const apiConfig = {
  requestPopular: `https://api.themoviedb.org/3/${movie}/popular?api_key=${key}&page=${page}`,
  requestUpcoming: `https://api.themoviedb.org/3/${movie}/upcoming?api_key=${key}&page=${page}`,
  requestTopRated: `https://api.themoviedb.org/3/${movie}/top_rated?api_key=${key}&page=${page}`,
  requestTrending: `https://api.themoviedb.org/3/trending/${movie}/day?api_key=${key}&page=${page}`,
  requestPopularTV: `https://api.themoviedb.org/3/${tv}/popular?api_key=${key}&page=${page}`,
  requestUpcomingTV: `https://api.themoviedb.org/3/${tv}/airing_today?api_key=${key}&page=${page}`,
  requestTopRatedTV: `https://api.themoviedb.org/3/${tv}/top_rated?api_key=${key}&page=${page}`,
  requestTrendingTV: `https://api.themoviedb.org/3/trending/${tv}/day?api_key=${key}&page=${page}`,
};

export default apiConfig;
