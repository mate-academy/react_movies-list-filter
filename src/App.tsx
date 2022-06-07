import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const movies = [...moviesFromServer];

  const getVisibleFilms = (moviesForFilter: Movie[]) => {
    const lowerQuery = query.toLowerCase();

    const filteredPeople = moviesForFilter.filter(movie => (
      movie.title.toLowerCase().includes(lowerQuery)
      || movie.description.toLowerCase().includes(lowerQuery)
    ));

    return filteredPeople;
  };

  const visibleFilms = getVisibleFilms(movies);

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
                //
                value={query}
                onChange={(event) => {
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
