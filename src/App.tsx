import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string;
  description: string;
  imdbId: string;
}

function searchMovie(query: string, movies: Movie[]): Movie[] {
  const queryToLower = query.toLowerCase().trim();
  const moviesToLower = movies.map(movie => {
    return {
      title: movie.title.toLowerCase(),
      description: movie.description.toLowerCase(),
      imdbId: movie.imdbId,
    };
  });

  return moviesToLower.filter(
    movie =>
      movie.description.includes(queryToLower) ||
      movie.title.includes(queryToLower),
  );
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const filterMovies = searchMovie(query, moviesFromServer);
  const visibleMovies = moviesFromServer.filter(movie =>
    filterMovies.some(filteredMovie => filteredMovie.imdbId === movie.imdbId),
  );

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
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

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
