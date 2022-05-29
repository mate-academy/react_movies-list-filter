import React, {
  ChangeEvent, useCallback,
  useEffect,
  useState,
} from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './models/models';

export const App: React.FC = () => {
  const [searchWords, setSearchWords] = useState('');

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const filtered = moviesFromServer
      .filter(movie => (movie.title + movie.description)
        .toLowerCase().includes(searchWords.toLowerCase()));

    setFilteredMovies(filtered);
  }, [searchWords]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchWords(event.currentTarget.value);
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
