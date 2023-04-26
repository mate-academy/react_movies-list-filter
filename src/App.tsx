import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const checkQueryMatch = (title: string, description: string, query: string) => {
  const lowerText = `${title.toLowerCase()} ${description.toLowerCase()}`;
  const searchQuery = query.trim().toLowerCase();

  return lowerText.includes(searchQuery);
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return checkQueryMatch(title, description, query);
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
                onChange={event => setQuery(event.target.value)}
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
