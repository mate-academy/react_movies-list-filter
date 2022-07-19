import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const visibleMovies = (movies: Movie[]) => {
    if (query) {
      const lowQuery = query.toLowerCase();

      return movies.filter(movie => (
        movie.title.toLowerCase().includes(lowQuery)
        || movie.description.toLowerCase().includes(lowQuery)
      ));
    }

    return movies;
  };

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies(moviesFromServer)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
