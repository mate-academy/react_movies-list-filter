import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movies } from './types/movies';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const visibleMovies = (moviesArray: Movies[], filter: string): Movies[] => {
    if (filter.length) {
      return moviesArray.filter(el => {
        const { description, title } = el;
        const toFilterLoverCase = (text: string): boolean => {
          return text
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase().trim());
        };

        const descriptionFilter = toFilterLoverCase(description);
        const titleFilter = toFilterLoverCase(title);

        return descriptionFilter || titleFilter;
      });
    }

    return moviesArray;
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
                onChange={handleChangeFilterText}
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies(moviesFromServer, query)} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
