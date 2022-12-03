import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const includesQueryText = (text: string, query: string) => (
  text.toLowerCase().replace(/ /g, '')
    .includes(query.toLowerCase().replace(/ /g, ''))
);

export const App: React.FC = () => {
  const [query, search] = useState('');

  const visibleMovies
    = [...moviesFromServer].filter(({ title, description }) => (
      includesQueryText(title, query)
      || includesQueryText(description, query)
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
                value={query}
                onChange={(e) => {
                  search(e.target.value);
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
