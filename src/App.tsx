import React, { ChangeEvent, useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { Movie } from './types/Movie';

import moviesFromServer from './api/movies.json';
import './App.scss';

const singleCaseQuery = (query: string) => {
  return query.toLowerCase();
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setVisibleMovies(moviesFromServer);
  }, []);

  const filterList = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    setVisibleMovies([...moviesFromServer].filter((movie) => {
      const title = singleCaseQuery(movie.title);
      const description = singleCaseQuery(movie.description);
      const searchValue = singleCaseQuery(event.target.value);

      return title.includes(searchValue) || description.includes(searchValue);
    }));
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
                onChange={filterList}
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
