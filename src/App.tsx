import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const prepareData = (data: string) => {
  return data.toLowerCase().trim();
};

const searchMovies = (movies: Movie[], query: string) => {
  return movies.filter(({ title, description }) => {
    const prepareQuery = prepareData(query);
    const prepareTitle = prepareData(title);
    const prepareDescription = prepareData(description);

    return prepareTitle.includes(prepareQuery)
      || prepareDescription.includes(prepareQuery);
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = searchMovies(moviesFromServer, query);

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
                onChange={(e) => {
                  setQuery(e.target.value);
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
