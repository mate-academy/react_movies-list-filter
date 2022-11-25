import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [text, setText] = useState('');

  const correctList = moviesFromServer.filter(movie => {
    const lowerText = text.toLowerCase();

    return (
      movie.title.toLowerCase().includes(lowerText)
      || movie.description.toLowerCase().includes(lowerText)
    );
  });

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
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  setText(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={correctList} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
