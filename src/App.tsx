import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, changeQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  useEffect(() => {
    const filteredMovies = moviesFromServer.filter(movie => {
      const formattedTitle = movie.title.toLowerCase();
      const formattedDescription = movie.description.toLowerCase();
      const formattedQuery = query.toLowerCase().trim();

      return formattedTitle.includes(formattedQuery)
          || formattedDescription.includes(formattedQuery);
    });

    setVisibleMovies(filteredMovies);
  }, [query]);

  const handleQuery = (str: string) => {
    changeQuery(str);
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
                type="text"
                value={query}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={(event) => handleQuery(event.target.value)}
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
