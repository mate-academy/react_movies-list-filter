import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchParam, setSearchParam] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const titleInLowerCase = movie.title.toLowerCase();
    const searchParamInLowerCase = searchParam.toLowerCase().trim();
    const descriptionInLowerCase = movie.description.toLowerCase();

    if (titleInLowerCase.includes(searchParamInLowerCase)
      || descriptionInLowerCase.includes(searchParamInLowerCase)) {
      return movie;
    }

    return undefined;
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
                value={searchParam}
                onChange={e => setSearchParam(e.target.value)}
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
