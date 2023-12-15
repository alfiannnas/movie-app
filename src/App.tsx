import { useEffect, useState } from "react";

import { getMovieList, searchMovie } from "./api.js";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => (
      <div className="card w-56 bg-base-100 shadow-xl" key={i}>
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
      <div className="flex flex-col items-center">
        {/* Search Bar */}
        <div className="mb-8">
          <label className="form-control w-full max-w-xs flex">
            <div className="label">
              <span className="label-text">Film apa yang sedang kamu cari?</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={({ target }) => search(target.value)} />
          </label>
        </div>
      </div>
      <div className="flex flex-wrap gap-20 justify-center">
        <PopularMovieList />
      </div>
    </>
  );
};

export default App;
