import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function includes(str: string, substr: string): boolean {
  return str.toLowerCase().includes(substr.toLowerCase().trim());
}

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState(moviesFromServer);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);

    setFilteredMovies(moviesFromServer.filter((movie) => {
      const { title, description } = movie;

      return includes(title, event.target.value)
        || includes(description, event.target.value);
    }));
  };

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
                onChange={handleSearchQueryChange}
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
