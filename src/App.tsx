import React, { useMemo, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

interface SearchMovie {
  description: string;
  title: string;
  imdbId: string;
  imdbUrl: string;
  imgUrl: string;
}

export const App: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const filteredMovies = (movies: SearchMovie[]) => {
    return movies.filter(movie => movie.title
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  || movie.description
    .toLowerCase()
    .includes(searchValue.toLowerCase()));
  };

  const visibleMovies = useMemo(() => filteredMovies(moviesFromServer), [searchValue]);

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
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
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
