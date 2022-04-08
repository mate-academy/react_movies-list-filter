import { useMemo, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, setQuery] = useState('');

  const filterMovies = () => {
    return moviesFromServer.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();
      const searchValue = query.toLowerCase();

      return title.includes(searchValue) || description.includes(searchValue);
    });
  };

  const visibleMovies = useMemo(() => filteredMovies(), [query]);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                />
              </div>
            </label>
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
