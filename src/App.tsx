import {
  FC,
  useState,
  BaseSyntheticEvent,
} from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const handleQueryChange = (query: string): Movie[] => {
  return moviesFromServer.filter((movie: Movie) => {
    const { title, description } = movie;
    const queryLowerCase = query.toLocaleLowerCase();

    return title.toLocaleLowerCase().includes(queryLowerCase)
      || description?.toLocaleLowerCase().includes(queryLowerCase);
  });
};

export const App: FC = () => {
  const [query, setquery] = useState('');

  const handleChange = (event:BaseSyntheticEvent) => {
    setquery(event.target.value);
  };

  const visibleMovies = handleQueryChange(query);

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
