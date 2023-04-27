import { FC, ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const getNormalisedString = (string: string): string => {
  return string.toLowerCase();
};

export const App: FC = () => {
  const [query, setInputText] = useState('');
  const visibleMovies = moviesFromServer.filter((movie) => {
    const normalizedQuery = getNormalisedString(query).trim();
    const normalizedTitle = getNormalisedString(movie.title);
    const normalizedDescription = getNormalisedString(movie.description);

    return normalizedTitle.includes(normalizedQuery)
    || normalizedDescription.includes(normalizedQuery);
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
