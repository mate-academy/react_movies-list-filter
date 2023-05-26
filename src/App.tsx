import './App.scss';
import React, { useState, ChangeEvent } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
     setQuery(event.target.value);
   };

  const queryLowerCase = query.toLowerCase().trim();
  const visibleMovies = query
    ? moviesFromServer.filter(({ title, description }) => (
      title.toLowerCase().includes(queryLowerCase)
        || description.toLowerCase().includes(queryLowerCase)
    ))
    : moviesFromServer;

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
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
