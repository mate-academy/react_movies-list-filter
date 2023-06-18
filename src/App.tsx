import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Film {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

export const App: React.FC = () => {
  const [films, setFilms] = useState<Film[]>(moviesFromServer);
  const [query, setQuery] = useState('');

  const findFilm = (value: string) => {
    setQuery(value);

    const lowercasedValue = value.trim().toLowerCase();

    const visibleMovies: Film[] = moviesFromServer.filter(film => (
      film.title.toLowerCase().includes(lowercasedValue)
      || film.description.toLowerCase().includes(lowercasedValue)
    ));

    setFilms(visibleMovies);
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
                onChange={(event) => findFilm(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={films} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
