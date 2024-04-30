import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import React from 'react';
import { useState } from 'react';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  function visibleMovies(): Movie[] {
    return moviesFromServer.filter(
      (movie: Movie) =>
        movie.title.toLowerCase().includes(query) ||
        movie.description.toLowerCase().includes(query),
    );
  }

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
                onChange={e => {
                  setQuery(e.target.value.toLowerCase().trim());
                }}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies()} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
