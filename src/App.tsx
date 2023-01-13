import { FC, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [filterValue, setFilterValue] = useState('');

  const displayedMovies = moviesFromServer.filter(({
    title,
    description,
  }) => {
    const filterParams = [
      `${title} ${description}`,
      filterValue.trim(),
    ].map(string => string.toLowerCase());

    const [titleAndDescription, search] = filterParams;

    return titleAndDescription.includes(search);
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
              htmlFor="search-query"
              className="label"
            >
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={filterValue}
                onChange={(filterEvent) => {
                  setFilterValue(filterEvent.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={displayedMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
