import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getLowerCase(str: string, name: string) {
  return str.toLowerCase().trim().includes(name.toLowerCase().trim());
}

export const App: React.FC = () => {
  const [nameMovies, setSearch] = useState('');

  const visibleMovies = moviesFromServer.filter(list => (
    getLowerCase(list.title, nameMovies)
    || getLowerCase(list.description, nameMovies)
  ));

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
                value={nameMovies}
                onChange={(e) => setSearch(e.target.value)}
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
