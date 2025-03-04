import React, { useMemo, useState } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchWords, setSearchWords] = useState('');

  const prepareMovie = (preparedMovies: Movie[]) => (
    preparedMovies.filter(movie => {
      const lowerMovieTitle = movie.title.toLowerCase();
      const lowerMovieDescription = movie.description.toLowerCase();
      const lowerSearchWords = searchWords.toLowerCase();

      return lowerMovieTitle.includes(lowerSearchWords)
        || lowerMovieDescription.includes(lowerSearchWords);
    })
  );

  const visibleMovies = useMemo(() => prepareMovie([...moviesFromServer]), [searchWords]);

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
                name={searchWords}
                value={searchWords}
                onChange={(event) => {
                  setSearchWords(event.target.value);
                }}
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
