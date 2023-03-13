import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInput(value);
  };

  const filteredMovies = moviesFromServer.filter(
    movie => movie.title.toLowerCase().includes(input.toLowerCase().trim())
    || movie.description.toLowerCase().includes(input.toLowerCase().trim()),
  );

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
                value={input}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleChange}
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
