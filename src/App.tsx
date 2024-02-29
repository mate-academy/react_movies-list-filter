/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;

    setSearch(newValue);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={
            search.length !== 0
              ? moviesFromServer.filter(
                  movie =>
                    movie.title
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase().trim()) ||
                    movie.description
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase().trim()),
                )
              : moviesFromServer
          }
        />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
