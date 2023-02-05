import React, { useState } from 'react';
import { MoviesList } from '../MoviesList';
import moviesFromServer from '../../api/movies.json';

export const SuggestedMovies: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setQuery(value);
  };

  return (
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
              name="query"
              id="search-query"
              className="input"
              placeholder="Type search word"
              value={query}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <MoviesList
        movies={moviesFromServer}
        query={query}
      />
    </div>
  );
};
