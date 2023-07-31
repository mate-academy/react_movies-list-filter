import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField/SearchField';

function getPreparedMovies(movies: Movie[], query:string) {
  const preparedMovies = [...movies];

  if (!query) {
    return movies;
  }

  const searchPropmpt = query.toLowerCase().trim();

  return preparedMovies.filter(
    movie => movie.title.toLowerCase().includes(searchPropmpt)
       || movie.description.toLowerCase().includes(searchPropmpt),
  );
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getPreparedMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>
            <SearchField filterBy={setQuery} />
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
