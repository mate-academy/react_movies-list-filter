import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  // I had to add type for this because my linter doesn't accept my added commits and push
  const handleSetQuery = (event: { target: { value: string; }; }) => {
    setQuery(event.target.value.toLowerCase());
  };

  const visibleMovies = moviesFromServer.filter((movie) => {
    return movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query);
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
                name="query"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={handleSetQuery}
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
