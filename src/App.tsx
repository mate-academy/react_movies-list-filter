import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const inputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const searchQuery = event.target.value;

    setQuery(searchQuery);

    const filteredMovies = moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        movie.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim()),
    );

    setVisibleMovies(filteredMovies);
  };

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
                onChange={inputChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
