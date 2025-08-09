import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const { value } = event.target;

    setQuery(value);
  };

  const visibleMovies = moviesFromServer.filter((movie: Movie) => {

    const queryLowerCase = query.toLowerCase();

    const {title, description} = movie;

    const titleLowerCase = title.toLowerCase();

    const descriptionLowerCase = description.toLowerCase()

    return (
      titleLowerCase.includes(queryLowerCase.trim()) ||
      descriptionLowerCase.includes(queryLowerCase.trim())
    );
  });

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
                onChange={handleChangeSearch}
                value={query}
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
