/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}
function getVisibleMovie(
  movies: Movie[],
  query: string,
): Movie[] {
  const lowerQuery = query.toLowerCase();
  const visiblePeople = movies.filter(
    (movie) => movie.title.toLowerCase().includes(lowerQuery)
      || movie.description.toLowerCase().includes(lowerQuery),
  );

  return visiblePeople;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovie = getVisibleMovie(moviesFromServer, query);

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
                value={query}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setQuery(event.currentTarget.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovie} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
