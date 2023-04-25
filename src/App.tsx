import { ChangeEvent, FC, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const formattedQuery = query.trim().toLowerCase();

  const doesMoviePropertyMatchQuery = ((movieProperty: string) => (
    movieProperty.toLowerCase().includes(formattedQuery)
  ));

  const visibleMovies = moviesFromServer.filter(movie => (
    doesMoviePropertyMatchQuery(movie.title)
    || doesMoviePropertyMatchQuery(movie.description)
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
                value={query}
                onChange={handleQueryChange}
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
