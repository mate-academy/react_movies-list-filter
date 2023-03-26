import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const isContainsQuery = (
  title: string,
  query: string,
) : boolean => title.toLowerCase().includes(query.toLowerCase().trim());

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const changeQueryEvent = (
    e: ChangeEvent<HTMLInputElement>,
  ) => setQuery(e.currentTarget.value);

  const isVisibleMovies = moviesFromServer.filter(({
    title,
    description,
  }): boolean => (
    isContainsQuery(title, query) || isContainsQuery(description, query)
  ));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={changeQueryEvent}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={isVisibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
