import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [movieList, setMovieList] = useState(moviesFromServer);

  function handleInputChange(event) {
    const input = event.target.value.toLowerCase();
    const newList = moviesFromServer
      .filter(film => film.title.toLowerCase().includes(input)
        || film.description.toLowerCase().includes(input));

    setMovieList(newList);
  }

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movieList} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
