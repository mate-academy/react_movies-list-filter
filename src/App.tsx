import React from 'react';
import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';

interface Props {
  movies: Movie[];
  query: string;
}

const filterMovies = (movies: Movie[], query: string): Movie[] => {
  const preparedQuery = query.toLowerCase().trim();
  if (preparedQuery) {
    const filteredMovies = movies.filter(movie => {
      return (
        movie.title.toLowerCase().includes(preparedQuery) ||
        movie.description.toLowerCase().includes(preparedQuery)
      );
    });

    return filteredMovies;
  }

  return movies;
};

export const App: React.FC<Props> = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
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
