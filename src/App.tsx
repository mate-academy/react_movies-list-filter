import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  function checkMoviesProperty(movie: Movie, searchStr: string) {
    return movie.title.toLowerCase().includes(searchStr.toLowerCase())
      || movie.description.toLowerCase().includes(searchStr.toLowerCase());
  }

  const visibleMovies = moviesFromServer.filter((movie) => (
    checkMoviesProperty(movie, query)));

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
                onChange={event => setQuery(event.target.value.trim())}
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
