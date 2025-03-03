import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const search = (data: Movie[]) => {
    return data.filter(move => {
      return move.title.toLowerCase().includes(query.toLowerCase())
      || move.description.toLowerCase().includes(query.toLowerCase());
    });
  };

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
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={search(moviesFromServer)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
