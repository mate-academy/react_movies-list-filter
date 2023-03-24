import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterFilms = (text: string) => {
  const moviesCopy = [...moviesFromServer];

  return moviesCopy.filter(movie => movie.title
    .toLowerCase().includes(text.toLowerCase())
    || movie.description.toLowerCase().includes(text.toLowerCase()));
};

export const App: React.FC = () => {
  const [text, setText] = useState('');

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
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filterFilms(text)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
