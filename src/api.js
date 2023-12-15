import axios from "axios";

const BaseUrl = import.meta.env.VITE_APP_BASEURL;
const ApiKey = import.meta.env.VITE_APP_APIKEY;

export const getMovieList = async () => {
  try {
    const response = await axios.get(`${BaseUrl}/movie/popular?api_key=${ApiKey}`);
    console.log({ movieList: response.data.results }); // Assuming results property contains the movie list
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error; // Re-throw the error to handle it at the calling site
  }
};

export const searchMovie = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}/search/movie?api_key=${ApiKey}&query=${query}`);
    console.log({ searchResults: response.data.results }); // Assuming results property contains the search results
    return response.data.results;
  } catch (error) {
    console.error("Error searching for movies:", error);
    throw error; // Re-throw the error to handle it at the calling site
  }
};
