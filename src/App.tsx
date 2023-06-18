import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleFilms = (movies: Movie[], searchQuery: string): Movie[] => {
    return movies.filter(movie => {
      const normalizedTitle = movie.title.toLowerCase();
      const normalizedDescription = movie.description.toLowerCase();
      const normalizedQuery = searchQuery.toLowerCase();

      return normalizedTitle.includes(normalizedQuery)
        || normalizedDescription.includes(normalizedQuery);
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
                onChange={(event) => {
                  setQuery((event.target.value).toLowerCase().trim());
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms(moviesFromServer, query)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
