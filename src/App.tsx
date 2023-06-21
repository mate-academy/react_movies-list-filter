import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Film {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Film[]>(moviesFromServer);
  const [query, setQuery] = useState('');

  const getMovies = (queryString: string) => {
    setQuery(queryString);

    const normalizedQuery = queryString.trim().toLowerCase();

    const visibleMovies = moviesFromServer.filter((movie) => (
      movie.title.toLowerCase().includes(normalizedQuery)
        || movie.description.toLowerCase().includes(normalizedQuery)
    ));

    setMovies(visibleMovies);
  };

  const handleQueryString = (event: React.ChangeEvent<HTMLInputElement>) => {
    getMovies(event.target.value);
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
                onChange={handleQueryString}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
