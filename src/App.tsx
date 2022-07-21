import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);
  const [query, setQuery] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  const newQuery = event.target.value;

                  setQuery(newQuery);
                  if (!newQuery.trim()) {
                    setVisibleMovies([...moviesFromServer]);
                  }

                  setVisibleMovies(moviesFromServer.filter(movie => {
                    const searchArea = (
                      movie.title + movie.description)
                      .toLowerCase();

                    return searchArea.includes(newQuery.trim().toLowerCase());
                  }));
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
