import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  function movieFilter(listOfMovies: Movie[]) {
    return listOfMovies.filter((movie: Movie) => {
      const condition = `${query}`;
      const regex = new RegExp(condition, 'gi');

      return movie.title.match(regex) || movie.description.match(regex);
    });
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
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movieFilter(moviesFromServer)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
