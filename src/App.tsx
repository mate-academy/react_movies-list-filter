import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [visableMovies, setVisableMovies] = useState([...moviesFromServer]);

  const handleQuery: React.ChangeEventHandler<HTMLInputElement> = event => {
    const word = event.target.value.trim();

    setVisableMovies(
      moviesFromServer.filter(
        movie =>
          movie.title.toLowerCase().includes(word.toLowerCase()) ||
          movie.description.toLowerCase().includes(word.toLowerCase()),
      ),
    );
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
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleQuery}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visableMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
