import {
  FC, useState, useMemo, useCallback,
} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const inMovieText = (value: string, query: string) => value.toLowerCase()
  .includes(query.trim().toLowerCase());

export const App: FC = () => {
  const [query, setQuery] = useState('');
  const matchedMovies = useMemo(() => {
    return moviesFromServer.filter(({ title, description }) => {
      return inMovieText(title.concat(description), query);
    });
  }, [moviesFromServer, query]);
  const handleChange = useCallback(({ target: { value } }) => {
    setQuery(value);
  }, []);

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <MoviesList movies={matchedMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
