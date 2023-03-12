import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string;
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

export function filterMovies(movies: Movie[], query: string): Movie[] {
  const visibleMovies = movies.filter(movie => {
    const { title, description } = movie;

    const checkString = (string: string) => string
      .toLowerCase()
      .includes(query.toLowerCase().trim());

    return checkString(title) || checkString(description);
  });

  return visibleMovies;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const movies = filterMovies(moviesFromServer, query);

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
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
