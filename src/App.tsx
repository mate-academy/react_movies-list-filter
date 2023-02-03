import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [qery, setQery] = useState('');
  const visibleMovies = [...moviesFromServer];
  const visibleMoviesFilterByTitle = visibleMovies.filter((movie) => (
    movie.title.toLocaleLowerCase().includes(
      qery.toLocaleLowerCase(),
    )));
  const visibleMoviesFilterByDiscription = visibleMovies.filter((movie) => (
    movie.description.toLocaleLowerCase().includes(
      qery.toLocaleLowerCase(),
    )
  ));
  const visibleMoviesOnRequest = 
    visibleMoviesFilterByTitle ||
    visibleMoviesFilterByDiscription;

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
                value={qery}
                onChange={(event) => {
                  setQery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMoviesOnRequest} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
