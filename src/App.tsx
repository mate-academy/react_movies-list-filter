import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trimStart());
  };

  const filteredMovies = (text: string, search: string) => {
    return text.toLowerCase().includes(search.toLowerCase().trim());
  };

  const visibleMovies = moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return filteredMovies(title, query) || filteredMovies(description, query);
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
                value={query}
                onChange={handelChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
