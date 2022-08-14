import React, {useState} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredmoviesFromServer = moviesFromServer.filter((movie) => {
    if (movie.title.toLowerCase().includes(query.toLowerCase())) {
      return movie;
    }

    if (movie.description.toLowerCase().includes(query.toLowerCase())) {
      return movie;
    }

    return 0;
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
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredmoviesFromServer} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
