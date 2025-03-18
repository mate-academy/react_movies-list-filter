import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export type Movie = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>(moviesFromServer);

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const newQuery = inputValue.trim();

    setQuery(inputValue);

    setVisibleMovies(
      moviesFromServer.filter(
        movie =>
          movie.title.toLowerCase().includes(newQuery.toLowerCase()) ||
          movie.description.toLowerCase().includes(newQuery.toLowerCase()),
      ),
    );
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
                onChange={event => handleInputValue(event)}
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
