import React, {
  ChangeEvent, useCallback,
  useState,
} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { useMovies } from './hooks/useMovies';

export const App: React.FC = () => {
  const [searchWords, setSearchWords] = useState('');

  const filteredMovies = useMovies(searchWords);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchWords(event.target.value);
  }, []);

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
                value={searchWords}
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />

      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
