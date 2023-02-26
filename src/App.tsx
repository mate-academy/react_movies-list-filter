import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function isIncluded(mainString: string, checkString: string) {
  return mainString.toLowerCase().trim()
    .includes(checkString.toLowerCase().trim());
}

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(({ title, description }) => (
    isIncluded(title, searchQuery)
    || isIncluded(description, searchQuery)
  ));

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
