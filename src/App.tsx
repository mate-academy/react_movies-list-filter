import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  // const debounce = (fn: () => {}, ms: number) => {
  //   let timeout: any;
  //
  //   return function ():void {
  //     const fnCall = () => {
  //       fn.apply(this, arguments);
  //     };
  //
  //     clearTimeout(timeout);
  //     timeout = setTimeout(fnCall, ms);
  //   };
  // };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
  }

  // const handleChanged = debounce(handleChange, 500);

  const visibleMovies = moviesFromServer.filter(movie => {
    const lowerCaseInput = query.trim().toLowerCase();
    const lowerMovieTitle = movie.title.toLowerCase();
    const lowerMovieDescription = movie.description.toLowerCase();

    return (
      lowerMovieTitle.includes(lowerCaseInput)
      || lowerMovieDescription.includes(lowerCaseInput)
    );
  });

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
                onChange={handleChange}
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
