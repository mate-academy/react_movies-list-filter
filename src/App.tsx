import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './react-app-env';

function getVisibleMovies(movies: Movie[], query: string) {
  const lowerQuery = query.toLowerCase();

  const filteredMovies = movies.filter(movie => (
    movie.title.toLowerCase().includes(lowerQuery)
    || movie.description.toLowerCase().includes(lowerQuery)
  ));

  return filteredMovies;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

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
                value={query}
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
                id="search-query"
                className="input"
                placeholder="Type search word"
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
