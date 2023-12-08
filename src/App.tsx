import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const filterMovies = (movies: Movie[], query: string) => {
  const result = movies.filter(movie => {
    const wanted = query.toLowerCase().trim();
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(wanted) || description.includes(wanted);
  });

  return result;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  const moviesToShow = filterMovies(moviesFromServer, query);

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

        <MoviesList movies={moviesToShow} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
