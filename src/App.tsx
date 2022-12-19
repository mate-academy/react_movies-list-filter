import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [request, setRequest] = useState('');

  const normalizeValue = (value: string) => (
    value.toLowerCase().includes(request.toLowerCase())
  );

  const filterMovies = moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return normalizeValue(title) || normalizeValue(description);
  });

  const searchMovie = (event:React.ChangeEvent<HTMLInputElement>) => {
    setRequest(event.target.value);
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
                value={request}
                onChange={searchMovie}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
