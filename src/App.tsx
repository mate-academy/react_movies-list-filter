import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const list = document
      .querySelector('.wrapper')?.children[0].children;

    if (list !== undefined) {
      for (let i = 0; i < list.length; i += 1) {
        list[i].classList.add('animate__animated');
        list[i].classList.add('animate__flash');
      }

      setTimeout(() => {
        for (let i = 0; i < list.length; i += 1) {
          list[i].classList.remove('animate__animated');
          list[i].classList.remove('animate__flash');
        }
      }, 500);
    }
  });
  const visibleMovies = moviesFromServer.filter(movie => {
    return (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
    );
  });

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
                onChange={(event) => (
                  setQuery(event.target.value)
                )}
              />
            </div>
          </div>
        </div>
        <div
          className="wrapper"
        >
          <MoviesList movies={visibleMovies} />
        </div>
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
