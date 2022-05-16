import { FC, useState} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter((movie) => {
    const queryInTitle = movie.title.toLowerCase()
      .includes(query.toLowerCase());

    const queryInDescription = movie.description.toLowerCase()
      .includes(query.toLowerCase());

    return queryInTitle || queryInDescription;
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
                value={query}
                placeholder="Type search word"
                onChange={({ target }) => setQuery(target.value)}
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
