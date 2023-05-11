import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies: Movie[], query: string) => {
  const lowerCaseQuery = query.toLowerCase().trim();

  return movies.filter(({ title, description }) => {
    const lowerCaseTitle = title.toLowerCase();
    const lowerCaseDescription = description.toLowerCase();

    return lowerCaseTitle.includes(lowerCaseQuery)
    || lowerCaseDescription.includes(lowerCaseQuery);
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange
   = (e:ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

  const visibleMovies = filterMovies(moviesFromServer, query);

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
                onChange={handleChange}
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
