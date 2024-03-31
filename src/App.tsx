import React, { ChangeEventHandler, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [reseach, setReseach] = useState('');
  const searchedMovie = (movies: Movie[], searchedText: string) => {
    const searchedInput = searchedText.toLocaleLowerCase().trim();

    return movies.filter(movie => {
      const titleAndDescription = `${movie.title.toLocaleLowerCase().trim()}${movie.description.toLocaleLowerCase().trim()}`;

      return titleAndDescription.includes(searchedInput);
    });
  };

  const handleSearchedText: ChangeEventHandler<HTMLInputElement> = event => {
    setReseach(event.target.value);
  };

  const visibleMovies = searchedMovie(moviesFromServer, reseach);

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
                onChange={handleSearchedText}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={reseach}
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
