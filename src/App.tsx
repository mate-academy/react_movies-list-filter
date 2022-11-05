import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setNewMovies] = useState<Movie[]>(moviesFromServer);

  const handlerQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setNewMovies(moviesFromServer.filter(movie => {
      const movieTitle = movie.title.toLowerCase();
      const movieDiscription = movie.description.toLowerCase();
      const movieQuery = query.toLowerCase();

      return movieTitle.includes(movieQuery)
      || movieDiscription.includes(movieQuery);
    }));
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
                onChange={handlerQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList
          visibleMovies={movies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
