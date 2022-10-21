import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>(moviesFromServer);

  const filterMovies = (movies:Movie[]) => {
    const selctedMovies = movies.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
      || movie.description.toLowerCase().includes(query.toLowerCase())
    ));

    setVisibleMovies(selctedMovies);
  };

  useEffect(() => filterMovies(moviesFromServer), [query]);

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
                onChange={(event) => (
                  setQuery(event.target.value)
                )}
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
