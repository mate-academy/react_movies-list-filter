import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const serchMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filterMovie = () => {
    const filteredMovie = moviesFromServer.filter(movie => {
      const { title, description } = movie;
      const upQuery = query.toUpperCase();
      const upTitle = title.toUpperCase();
      const upDescription = description.toUpperCase();

      if (upQuery.length === 0) {
        return true;
      }

      if (upTitle.includes(upQuery) || upDescription.includes(upQuery)) {
        return true;
      }

      return false;
    });

    return filteredMovie;
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <div className="control">
              <label htmlFor="search-query" className="label">
                Search movie

                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={serchMovie}
                />
              </label>
            </div>
          </div>
        </div>

        <MoviesList movies={filterMovie()} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
