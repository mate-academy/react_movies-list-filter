import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovies(filterValue : string, list : Movie[]) {
  return (list.filter((movie : Movie) => {
    const loweredTitle = movie.title.toLowerCase();
    const loweredDescription = movie.description.toLowerCase();

    if ((loweredTitle.search(filterValue) !== -1)
    || (loweredDescription.search(filterValue) !== -1)) {
      return movie;
    }

    return undefined;
  }));
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

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
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {
          (query === '')
            ? <MoviesList movies={moviesFromServer} />
            : <MoviesList movies={filterMovies(query, moviesFromServer)} />
        }

      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
