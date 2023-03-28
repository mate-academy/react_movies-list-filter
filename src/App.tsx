import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  function handler(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value.toLowerCase().trim());
  }

  const visible = moviesFromServer
    // eslint-disable-next-line max-len
    .filter(({ description, title }) => description.toLowerCase().includes(query)
      || title.toLowerCase().includes(query));

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
                value={query}
                onChange={handler}
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visible} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
