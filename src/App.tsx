import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (movies: Movie[], search: string) => {
  return movies.filter(movie => {
    const searchBy = search.toLowerCase();
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();

    return title.includes(searchBy) || description.includes(searchBy);
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>(moviesFromServer);

  useEffect(() => {
    setVisibleMovies(getFilteredMovies(moviesFromServer, query));
  }, [query]);

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
                onChange={event => {
                  setQuery(event.target.value);
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
