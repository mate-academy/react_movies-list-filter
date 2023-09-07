import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filteredMovies = (query: string):Movie[] => {
  return moviesFromServer.filter((movie:Movie) => {
    const { description, title } = movie;
    const searchPattern = new RegExp(query.trim(), 'i');

    return description.search(searchPattern) + title.search(searchPattern) > -2;
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');

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
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies(query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
