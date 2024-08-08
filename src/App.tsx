import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getFilterMovies(movies: Movie[], query: string) {
  let visibleMovies = [...movies];

  visibleMovies = visibleMovies.filter(
    movie =>
      movie.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase().trim()) ||
      movie.description
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase().trim()),
  );

  return visibleMovies;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const movies = getFilterMovies(moviesFromServer, query);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

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
                onChange={handleQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
