import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [visibleMovies, setMovies] = useState(moviesFromServer);

  const filterByQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim(); // trim due to test 15, "should work if user types extra spaces before or after the query"

    setMovies(moviesFromServer.filter((movie) => (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
    )));
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={filterByQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
