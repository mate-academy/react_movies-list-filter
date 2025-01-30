import React from 'react';
import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

import { Movie } from './types/movie'; // Assuming you have a Movie type defined

function getSearch(movies: Movie[], query: string) {
  let searchMovies = [...movies];

  if (query) {
    searchMovies = searchMovies.filter(movie => {
      const normalizedQuery = query.trim().toUpperCase();

      return (
        movie.title.trim().toUpperCase().includes(normalizedQuery) ||
        movie.description.trim().toUpperCase().includes(normalizedQuery)
      );
    });
  }

  return searchMovies;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getSearch(moviesFromServer, query);

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
                onChange={event => {
                  setQuery(event.target.value);
                }}
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
