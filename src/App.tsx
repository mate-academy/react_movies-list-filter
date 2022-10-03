import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function searchText(whereSearch: string, whatSearch: string) {
  return whereSearch.toLowerCase().includes(whatSearch.toLowerCase());
}

export const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const moviesForVisible = moviesFromServer.filter(movie => {
    return searchText(movie.title, search)
        || searchText(movie.description, search);
  });

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
                name="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={moviesForVisible}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
