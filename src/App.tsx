import { useMemo, useState } from 'react';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MoviesList';

import './App.scss';

export const App = () => {
  const [query, setQuery] = useState('');

  const filterMovies = () => {
    return moviesFromServer.filter((movie) => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();
      const searchString = query.toLowerCase();

      return title.includes(searchString) || description.includes(searchString);
    });
  };

  const visibleMovies = useMemo(() => filterMovies(), [query]);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="What movie are you looking for"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                />
              </div>
            </label>
          </div>
        </div>

        <MovieList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
