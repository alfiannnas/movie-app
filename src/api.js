import axios from "axios";

const BaseUrl = import.meta.env.REACT_APP_BASEURL;
const ApiKey = import.meta.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get("${BaseUrl}/movie.popular?api_key${ApiKey}");
  console.log({ movieList: movie });
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
