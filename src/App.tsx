import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function includes(str: string, substr: string): boolean {
  return str.toLowerCase().includes(substr.toLowerCase().trim());
}

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredMovies = moviesFromServer.filter(movie => (
    includes(movie.title, searchQuery)
    || includes(movie.description, searchQuery)
  ));

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
