import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  let query = '';
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);

  const filteredMovies = (movieList: Movie[], searchQuery: string) => {
    return [...movieList].filter(movie => (
      movie.description.toLowerCase().includes(searchQuery.toLowerCase())
      || movie.title.toLowerCase().includes(searchQuery.toLowerCase())));
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
                onChange={(event) => {
                  query = event.target.value;
                  setVisibleMovies(filteredMovies(moviesFromServer, query));
                }}
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
