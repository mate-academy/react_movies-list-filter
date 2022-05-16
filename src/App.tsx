import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const visibleMovies = [...moviesFromServer].filter(movie => movie.title
    .toLowerCase().includes(query.toLowerCase())
    || movie.description.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <form>
              <label
                htmlFor="search-query"
                className="label"
              >
                Search movie
              </label>
            </form>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={event => {
                  handleChange(event.target.value);
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
