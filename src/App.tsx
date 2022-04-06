/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [movies, setFilterMovies] = useState(moviesFromServer);
  const [text, setText] = useState('');

  useEffect(() => setFilterMovies(
    [...moviesFromServer.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))],
  ), [text]);

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
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
