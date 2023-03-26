import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbId: string,
  imdbUrl: string,
}

export function getMatchingMovies(movies: Movie[], query: string): Movie[] {
  const insensetiveQuery = query.toLowerCase().trim();

  const matchingMovies = movies.filter((movie) => {
    const insensetiveTitle = movie.title.toLowerCase();
    const insensetiveDescription = movie.description.toLowerCase();

    return insensetiveTitle.includes(insensetiveQuery)
      || insensetiveDescription.includes(insensetiveQuery);
  });

  return matchingMovies;
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getMatchingMovies(moviesFromServer, query);

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
                onChange={(event) => setQuery(event.target.value)}
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
