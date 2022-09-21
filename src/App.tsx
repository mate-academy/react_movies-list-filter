import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setquery] = React.useState('');

  const handlChange = (event:
  { target: { value: React.SetStateAction<string>; }; }) => {
    setquery(event.target.value);
  };

  function filterMove(event: string) {
    return event.toLowerCase().includes(query.toLowerCase());
  }

  const visibleMovies = moviesFromServer
    .filter(move => filterMove(move.title) || filterMove(move.description));

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
                value={query}
                onChange={handlChange}
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
