import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);

  useEffect(() => {
    const format = (str: string) => {
      return str.toLowerCase().replace(/\s/g, '');
    };

    setVisibleMovies([...moviesFromServer].filter(
      ({ title, description }) => [title, description].some(
        movie => format(movie).includes(format(searchValue)),
      ),
    ));
  }, [searchValue]);

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
                autoComplete="off"
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
              />
            </div>

          </div>
        </div>

        <MoviesList
          movies={[...visibleMovies]}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
