import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './react-app-env';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>(moviesFromServer);

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();

    const visibleMovies = moviesFromServer.filter(movie => (
      movie.title.toLowerCase().includes(lowerCaseQuery)
        || movie.description.toLowerCase().includes(lowerCaseQuery)
    ));

    setMovies(visibleMovies);
  }, [query]);

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
                onChange={event => (
                  setQuery(event.target.value)
                )}
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
