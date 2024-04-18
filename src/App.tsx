import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  interface Move {
    title: string;
    description: string;
    imgUrl: string;
    imdbUrl: string;
    imdbId: string;
  }

  function handleQuery(newQuery: string) {
    setQuery(newQuery);
  }

  function checkIncludesQuery(movie: Move) {
    const finalQuery = query.toLowerCase().trim();

    return (
      movie.title.toLowerCase().includes(finalQuery) ||
      movie.description.toLowerCase().includes(finalQuery)
    );
  }

  const visibleMovies: Move[] = moviesFromServer.filter(checkIncludesQuery);

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
                value={query}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={e => handleQuery(e.target.value)}
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
