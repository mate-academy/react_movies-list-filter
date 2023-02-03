import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getFilteredMovies = (searchQuery: string, movies: Movie[]) => {
  return movies.filter(movie => {
    const { description, title } = movie;
    const desctiptionContaines = description.toLowerCase()
      .includes(searchQuery.toLowerCase().trim());
    const titleContaines = title.toLowerCase()
      .includes(searchQuery.toLowerCase().trim());

    return desctiptionContaines || titleContaines;
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getFilteredMovies(query, moviesFromServer);

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
                onChange={(event) => {
                  setQuery(event.target.value);
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
