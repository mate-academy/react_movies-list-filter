import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  const filtered = moviesFromServer.filter(movie => {
    const queryWords = query.trim().toLowerCase().split(/\s+/);

    return queryWords.every(word => movie.title.toLowerCase().includes(word)
    || movie.description.toLowerCase().includes(word));
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
                placeholder="Search"
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filtered} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
