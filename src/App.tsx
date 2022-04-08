import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchValue, searchHandler] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

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
                value={searchValue}
                onChange={(event) => {
                  const searchQuery = event.target.value;

                  searchHandler(searchQuery);
                  setVisibleMovies(moviesFromServer.filter(movie => (
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
                    || movie.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )));
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies}
        />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
