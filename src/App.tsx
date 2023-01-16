import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const formattedSearchQuery = searchQuery.toLocaleLowerCase()
    .split(' ')
    .filter(Boolean)
    .join(' ');

  const filteredMovies
    = moviesFromServer.filter(movie => {
      const isTitleIncludes = movie.title.toLocaleLowerCase()
        .includes(formattedSearchQuery);
      const isDescriptionIncludes = movie.description.toLocaleLowerCase()
        .includes(formattedSearchQuery);

      return (isTitleIncludes || isDescriptionIncludes);
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
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
