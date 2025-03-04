import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const searchMovie = (query: string) => {
  return moviesFromServer.filter(movie => {
    const movieTitle = movie.title.toLowerCase();
    const movieDesription = movie.description.toLowerCase();
    const searchedQuery = query.toLowerCase().trim();

    return movieTitle.includes(searchedQuery)
      || movieDesription.includes(searchedQuery);
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handlerSearch = (event: {
    target: { value: React.SetStateAction<string>;
    }; }) => {
    setQuery(event.target.value);
  };

  const visibleMovies = searchMovie(query);

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
                onChange={handlerSearch}
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
