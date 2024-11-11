import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export type Movie = (typeof moviesFromServer)[0];

export const App = () => {
  const [filteredMovieList, setFilteredMovieList] =
    useState<Movie[]>(moviesFromServer);

  function handleInputTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchQuery = event.target.value.toLowerCase().trim();
    const filteredMovies = moviesFromServer.filter(
      movie =>
        movie.title.toLowerCase().includes(searchQuery) ||
        movie.description.toLowerCase().includes(searchQuery),
    );

    setFilteredMovieList(filteredMovies);
  }

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
                onChange={handleInputTextChange}
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovieList} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
