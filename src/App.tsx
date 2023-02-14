import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  function setWords(words: string) {
    return (words.toLocaleUpperCase().slice(0, 1)
    + words.toLocaleLowerCase().slice(1));
  }

  function setName(name: string) {
    return name.split(' ').map(words => setWords(words)).join(' ');
  }

  function setMovie(name: string) {
    return moviesFromServer.filter(
      (movie) => movie.title.includes(name)
      || movie.description.includes(name),
    );
  }

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
                onChange={(event) => {
                  setQuery(setName(event.target.value));
                  setVisibleMovies(setMovie(query));
                }}
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
