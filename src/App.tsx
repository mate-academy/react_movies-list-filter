import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setValue] = useState('');
  const queryLowLet = query.toLowerCase();
  const visibleMovies = moviesFromServer.filter(movie => (
    movie.title.toLowerCase().includes(queryLowLet)
    || movie.description.toLowerCase().includes(queryLowLet)
  ));

  function findQuery(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setValue(event.target.value);
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
                placeholder="Type search word"
                onChange={findQuery}
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
