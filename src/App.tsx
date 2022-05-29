import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [queryTitle, setTitle] = useState('');
  const [queryDescription, setDescription] = useState('');

  const query = (event: string) => {
    setTitle(event);
    setDescription(event);
  };

  const filteredMovies = moviesFromServer.filter((movie) => (
    movie.description.toLowerCase().includes(queryDescription)
    || movie.title.toLowerCase().includes(queryTitle)
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
                onChange={(event) => {
                  query(event.target.value.toLowerCase());
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
