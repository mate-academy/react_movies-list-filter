import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function filterMoviesList(value: string, moviesList: Movie[]): Movie[] {
    return moviesList.filter(movie => {
      return (
        movie.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        || movie.description
          .toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const prepareQuery = query.trim();

  const visibleMovies = filterMoviesList(prepareQuery, moviesFromServer);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
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
                name="search"
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
