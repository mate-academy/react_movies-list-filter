import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilteredMoviesList(moviesList, query) {
  const queryToSearch = query.toLowerCase().trim();

  return queryToSearch
    ? moviesList.filter(({ title, description }) => (
      title.toLowerCase().includes(queryToSearch)
        || description.toLowerCase().includes(queryToSearch)
    ))
    : moviesList;
}

export const App = () => {
  const [query, setQuery] = useState('');
  const saveValueToQuery = value => setQuery(value);
  const filteredMoviesList = getFilteredMoviesList(moviesFromServer, query);

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
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => {
                  saveValueToQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMoviesList} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
