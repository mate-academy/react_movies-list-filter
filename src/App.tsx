import React, { ChangeEventHandler, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMoviesWithQuery(movies: Movie[], query: string) {
  return movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();
    const formattedQuery = query.trim().toLowerCase();

    return title.includes(formattedQuery)
      || description.includes(formattedQuery);
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = filterMoviesWithQuery(moviesFromServer, query);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
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
