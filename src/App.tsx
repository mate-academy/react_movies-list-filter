import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [allMovies, setVisible] = useState({
    visibleMovies: moviesFromServer,
  });

  const [query, setQuery] = useState({
    searchResults: '',
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      searchResults: e.target.value,
    });

    function filterMovies(movies: Movie[]) {
      return movies.filter(movie => (
        movie.description.toLowerCase().includes(query.searchResults)
        || movie.title.toLowerCase()
          .includes(query.searchResults.toLowerCase())
      ));
    }

    const visibleMovies = filterMovies(moviesFromServer);

    setVisible({ visibleMovies });
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query.searchResults}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={allMovies.visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
