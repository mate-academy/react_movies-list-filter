import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filterListMovies = (searchString: string) => {
    setQuery(searchString.toLocaleLowerCase().trim());
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
                onChange={event => filterListMovies(event.currentTarget.value)}
              />
            </div>
          </div>
        </div>
        <MoviesList
          movies={moviesFromServer.filter(
            e =>
              e.title.toLowerCase().includes(query) ||
              e.description.toLowerCase().includes(query),
          )}
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
