import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies: Movie[], searchQuery: string) => {
  return movies.filter(movie => {
    const { title, description } = movie;
    const preparedQuery = searchQuery.toLowerCase();
    const preparedTitle = title.toLowerCase();
    const preparedDescription = description.toLowerCase();

    return (
      preparedTitle.includes(preparedQuery)
      || preparedDescription.includes(preparedQuery)
    );
  });
};

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchInputHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchQuery(value);
  };

  const visibleMovies = filterMovies(moviesFromServer, searchQuery);

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
                value={searchQuery}
                onChange={searchInputHandle}
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
