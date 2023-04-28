import { FC, ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getNormalisedString = (string: string): string => {
  return string.toLowerCase();
};

const callback = (list: Movie, inputValue: string): boolean => {
  const normalizedQuery = getNormalisedString(inputValue).trim();
  const normalizedTitle = getNormalisedString(list.title);
  const normalizedDescription = getNormalisedString(list.description);

  return normalizedTitle.includes(normalizedQuery)
    || normalizedDescription.includes(normalizedQuery);
};

export const App: FC = () => {
  const [query, setInputText] = useState('');

  const visibleMovies = moviesFromServer.filter((movie) => {
    return callback(movie, query);
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

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
                onChange={handleInputChange}
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
