import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, searchFn] = useState('');

  const findFilmBy = (searchLine: string, movieProperty: string): boolean => {
    return movieProperty.toLowerCase().includes(searchLine);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return searchFn(event.target.value);
  };

  const visibleMovies = [...moviesFromServer].filter((movie) => {
    const { title, description } = movie;
    const query = search.toLowerCase().trim();

    return findFilmBy(query, title) || findFilmBy(query, description);
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
                onChange={handleChange}
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
