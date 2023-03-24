import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setGuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    return setGuery(value);
  };

  const visibleMovies = moviesFromServer.filter(movie => {
    const loverCaseMovieTitle = movie.title.toLocaleLowerCase();
    const loverCaseMovieDescription = movie.description.toLocaleLowerCase();
    const loverCaseQuery = query.toLocaleLowerCase().trim();

    return loverCaseMovieTitle.includes(loverCaseQuery)
      || loverCaseMovieDescription.includes(loverCaseQuery);
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
                placeholder="Type search word"
                value={query}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>
    </div>
  );
};
