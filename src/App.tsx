import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovie] = useState(moviesFromServer);

  useEffect(() => {
    const filtred = moviesFromServer.filter(movie => {
      const { title, description } = movie;
      const lowerCasedTitle = title.toLowerCase();
      const lowerCasedDescription = description.toLowerCase();
      const lowerCasedQuery = query.toLowerCase().trim();

      return lowerCasedTitle.includes(lowerCasedQuery)
        || lowerCasedDescription.includes(lowerCasedQuery);
    });

    setMovie(filtred);
  }, [query]);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
