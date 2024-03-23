import './App.scss';

import { MoviesList } from './components/MoviesList';
import React from 'react';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('');

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
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesFromServer} filter={filter} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
