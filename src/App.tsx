import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Movie = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
};

export const App: React.FC = () => {
  const [query, amendQuery] = useState('');

  const formatSearchElem = (elem: string) => elem.toLowerCase().trim();

  const filterByQuery = (movie: Movie) => {
    const formattedQuery = formatSearchElem(query);
    const fromattedTitle = formatSearchElem(movie.title);
    const formattedDescription = formatSearchElem(movie.description);

    return fromattedTitle.includes(formattedQuery)
      || formattedDescription.includes(formattedQuery);
  };

  const visibleMovies = moviesFromServer.filter(filterByQuery); // also to be used as default list of movies as includes() return true if empty string has been passed as a parameter (no query)

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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  return amendQuery(event.target.value);
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
