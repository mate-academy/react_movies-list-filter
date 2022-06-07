import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getVisibleMovie(movies: Movie[], query: string) {
  const lowerQuery = query.toLowerCase();

  const filteredMovie = movies.filter(movie => (
    movie.title.toLowerCase().includes(lowerQuery)
    || movie.description.toLowerCase().includes(lowerQuery)
  ));

  return filteredMovie;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovie([...moviesFromServer], query);

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
                value={query}
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setQuery(event.target.value);
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
