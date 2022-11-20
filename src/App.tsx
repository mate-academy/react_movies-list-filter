import React, { useState } from 'react';
// import debounce from 'lodash.debounce';
import { debounce } from 'lodash';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer
    .filter((movie) => {
      let {
        title,
        description,
      } = movie;
      const searchWordToLow = query.toLowerCase();

      title = title.toLowerCase();
      description = description.toLowerCase();

      return title.includes(searchWordToLow)
        || description.includes(searchWordToLow);
    });

  const debounceQuery = debounce((value) => setQuery(value), 1000);

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
                onChange={(event) => debounceQuery(event.target.value)}
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
