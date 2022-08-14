import React, {useMemo, useState} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const moviesFilter = (query: string) => moviesFromServer
  .filter(movie => {
    const titleToLowerCase = movie.title.toLowerCase();
    const descriptToLowerCase = movie.description.toLowerCase();
    const queryToLowerCase = query.toLowerCase();

    const titleIncludes = titleToLowerCase.includes(queryToLowerCase);
    const descriptIncludes = descriptToLowerCase.includes(queryToLowerCase);

    return titleIncludes || descriptIncludes;
  });

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = useMemo(() => moviesFilter(query), [query]);

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
                onChange={(event) => setQuery(event.target.value)}
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
