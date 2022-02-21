import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>(moviesFromServer);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
    setVisibleMovies(() => moviesFromServer.filter((movie) => {
      const { title, description } = movie;

      return title.toLowerCase().includes(value.toLowerCase())
      || description.toLowerCase().includes(value.toLowerCase());
    }));
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setQuery('');
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <div className="control">
              <label
                htmlFor="search-query"
                className="label"
              >
                Search movie
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={changeHandler}
                  onKeyPress={keyPressHandler}
                />
              </label>
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
