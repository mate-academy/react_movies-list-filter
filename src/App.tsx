import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMovie(query: string): Movie[] {
  return moviesFromServer.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();
    const optimizedQUery = query.toLowerCase().trim();
    const hasTitleQuery = title.includes(optimizedQUery);
    const hasDescriptionQuery = description.includes(optimizedQUery);

    return hasTitleQuery || hasDescriptionQuery;
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovie(query);

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
