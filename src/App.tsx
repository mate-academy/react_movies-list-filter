import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const searchMovie = (arg:string) => {
    const movies = [];

    if (arg === '') {
      setVisibleMovies(moviesFromServer);
    }

    for (let i = 0; i < moviesFromServer.length; i += 1) {
      const lowerCaseString = arg.toLocaleLowerCase();

      if (moviesFromServer[i].title.toLocaleLowerCase()
        .includes(lowerCaseString)
        || moviesFromServer[i].description.toLocaleLowerCase()
          .includes(lowerCaseString)
      ) {
        movies.push(moviesFromServer[i]);
        setVisibleMovies(movies);
      }
    }
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
                onChange={(e) => {
                  setQuery(e.target.value);

                  searchMovie(query);
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
