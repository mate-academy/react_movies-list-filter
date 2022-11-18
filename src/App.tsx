import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);
  const filterMovies = () => {
    const foundMovies = moviesFromServer.filter((movie) => {
      const isContain = (name: keyof Movie) => movie[name]
        .toLowerCase().includes(search.toLowerCase());

      return isContain('title') || isContain('description');
    });

    return foundMovies;
  };

  useEffect(() => {
    setVisibleMovies(filterMovies());
  }, [search]);

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
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
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
