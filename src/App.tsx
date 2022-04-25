import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const changeMoviesList = (searchQuery: string) => ([...moviesFromServer]
    .filter(movie => movie.title.toLowerCase()
      .includes(searchQuery.toLowerCase())
      || movie.description.toLowerCase().includes(searchQuery.toLowerCase())));

  // eslint-disable-next-line
  const changeHandler = (event: { target: { value: any; }; }) => {
    const { value } = event.target;

    setQuery(value);
    setVisibleMovies(changeMoviesList(value));
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
                value={query}
                onChange={changeHandler}
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
