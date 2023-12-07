import {
  FC, useState, ChangeEventHandler, useEffect,
} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import searchTextInString from './searchTextInString';

export const App: FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState(moviesFromServer);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value.trimStart());
  };

  useEffect(() => {
    const filteredMovies = moviesFromServer.filter(movie => {
      const isInTitle = searchTextInString(movie.title, query);
      const isInDescription = searchTextInString(movie.description, query);

      return (isInTitle || isInDescription) && movie;
    });

    setVisibleMovies(filteredMovies);
  }, [query]);

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
                onChange={handleChange}
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
