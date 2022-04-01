import './App.scss';
import { debounce } from 'lodash';
import {
  FC, useState, useMemo, useCallback, memo,
} from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = memo(() => {
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 1000),
    [],
  );

  const visibleMovies = useMemo(
    () => moviesFromServer.filter(({ title, description }) => {
      const lowerCaseQuery = query.toLowerCase();
      const lowerCaseTitle = title.toLowerCase();
      const lowerCaseDescription = description.toLowerCase();

      return lowerCaseTitle.includes(lowerCaseQuery)
        || lowerCaseDescription.includes(lowerCaseQuery);
    }), [appliedQuery],
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={(({ target }) => {
                    setQuery(target.value);
                    applyQuery(target.value);
                  })}
                />
              </div>
            </label>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
});
