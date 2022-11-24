import { FC, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [searchText, setsearchText] = useState('');
  const normalizedIncludesQuery = (value: string) => {
    return value.toLowerCase().includes(searchText.toLowerCase());
  };

  const visibleMovies = moviesFromServer.filter(
    movie => normalizedIncludesQuery(movie.title)
      || normalizedIncludesQuery(movie.description),
  );

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
                onChange={(event) => setsearchText(event.target.value)}
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
