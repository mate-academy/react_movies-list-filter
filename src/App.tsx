import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, setSearh] = useState('');
  const visibleMovies = [...moviesFromServer]
    .filter(movieSearch => {
      const normalizeSearch = search.toLowerCase();
      const normalizeTitle = movieSearch.title.toLowerCase();
      const normalizeDescription = movieSearch.description.toLowerCase();

      return normalizeTitle.toLowerCase().includes(normalizeSearch)
      || normalizeDescription.toLowerCase().includes(normalizeSearch);
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => (
    setSearh(event.target.value)
  );

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
                value={search}
                onChange={handleChange}
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
