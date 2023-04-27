import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function isIncludes(str: string, substr: string): boolean {
  const strLower = str.toLowerCase();
  const substrLower = substr.toLowerCase().trim();

  return strLower.includes(substrLower);
}

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredMovies = moviesFromServer.filter(movie => {
    const { title, description } = movie;

    return (isIncludes(title, searchQuery)
      || isIncludes(description, searchQuery));
  });

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
