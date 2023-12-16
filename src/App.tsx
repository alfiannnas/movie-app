import { useEffect, useState } from "react";

import { getMovieList, searchMovie } from "./api.js";
import NavBar from "./components/NavBar.tsx";
import SearchBar from "./components/SearchBar.tsx";
import Carousel from "./components/Carousel.tsx";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => (
      <div className="card w-56 bg-base-100 shadow-xl border border-transparent rounded-lg transition-transform transform hover:scale-105" key={i}>
        <figure className="max-h-290">
          <img src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p>{movie.release_date}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-accent">{movie.vote_average}</div>
          </div>
        </div>
      </div>
    ));
  };

  const search = (q) => {
    console.log({ q });
  };

  return (
    <>
      <NavBar />
      <Carousel />

      <div className="flex flex-wrap gap-20 justify-center">
        <PopularMovieList />
      </div>
    </>
  );
};

export default App;
