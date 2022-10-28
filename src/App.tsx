import React, { useCallback, useMemo, useState } from 'react';
import './App.scss';
import { debounce } from 'lodash';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getMatchingMovies = (query: string): Movie[] => {
  return moviesFromServer.filter(({ title, description }) => {
    const lowerCaseQuery = query.toLowerCase();
    const matchTitle = title.toLowerCase().includes(lowerCaseQuery);
    const matchDescription = description.toLowerCase().includes(lowerCaseQuery);

    return matchTitle || matchDescription;
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const visibleMovies: Movie[] = useMemo(() => (
    getMatchingMovies(query)
  ), [moviesFromServer, appliedQuery]);

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 1000),
    [],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    applyQuery(event.target.value);
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
                name="query"
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
