import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

import { useState } from 'react';
import { Movie } from './types/types';

// as Movie[] is a type assertion (or type casting) that tells TypeScript
// to treat moviesFromServer as an array of Movie objects.
// 1- "Here's my JSON data ( moviesFromServer )"
// 2- "I want to use it as an array of Movie objects ( as Movie[] )"
// 3- "Store it in the movies variable"

const movies = moviesFromServer as Movie[];

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

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
                onChange={event => {
                  // eslint-disable-next-line no-console
                  //// console.log(event.currentTarget.value);
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} query={query} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
