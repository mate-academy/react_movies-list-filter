/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredMovieFromServer = () => {
    const filteredMoviesList
      = moviesFromServer.filter((movie: Movie) => {
        const { title, description } = movie;

        if (query.length === 0) {
          return true;
        }

        if (title.toLowerCase().includes(query.trim().toLowerCase())
          || description.toLowerCase().includes(query.trim().toLowerCase())) {
          return true;
        }

        return false;
      });

    return filteredMoviesList;
  };

  const Search = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
                value={query}
                onChange={Search}
              />
            </div>
          </div>
        </div>
        <MoviesList
          movies={filteredMovieFromServer()}
        />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};

export default App;
