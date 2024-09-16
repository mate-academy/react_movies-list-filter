import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

const filterByQuery = (queryText: string): Movie[] => (
  moviesFromServer.filter(({ title, description }) => (
    title.toLowerCase().includes(queryText)
    || description.toLowerCase().includes(queryText)))
);

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const trimedQuery = query.trim();
  const visibleMovies: Movie[] = trimedQuery !== ''
    ? filterByQuery(trimedQuery.toLowerCase())
    : [...moviesFromServer];

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
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
                onChange={handleQueryChange}
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
