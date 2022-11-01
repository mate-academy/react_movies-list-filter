import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>(moviesFromServer);

  useEffect(() => {
    setVisibleMovies(() => {
      const queryNormalized = query.toLowerCase();

      return moviesFromServer.filter((movie) => {
        const descriptionNormalized = movie.description.toLowerCase();
        const titleNormalized = movie.title.toLowerCase();

        return (titleNormalized.includes(queryNormalized)
            || descriptionNormalized.includes(queryNormalized));
      });
    });
  }, [query]);

  const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(() => event.target.value);
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
                onChange={handleInputOnChange}
              />
            </div>
          </div>
        </div>

        <MoviesList
          visibleMovies={visibleMovies}
        />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
