import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, setSearch] = useState('');

  const searchFilter = (movie: Movie) => {
    const { title, description } = movie;

    return title.toLowerCase().includes(search.toLowerCase())
      || description.toLowerCase().includes(search.toLowerCase());
  };

  const filteredMovies = moviesFromServer.filter(searchFilter);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string>; }; }) => {
    setSearch(event.target.value);
  };

  const moviesOnScreen = search ? filteredMovies : moviesFromServer;

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
                onChange={handleChange}
                value={search}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesOnScreen} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
