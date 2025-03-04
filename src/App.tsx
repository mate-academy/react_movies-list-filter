import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

const movies: Movie[] = moviesFromServer;

const filteredMovies = (allMovies: Movie[], query: string): Movie[] => {
  let moviesCopy = [...allMovies];

  if (query) {
    moviesCopy = moviesCopy.filter(movie => {
      return (
        movie.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        movie.description.toLowerCase().includes(query.trim().toLowerCase())
      );
    });
  }

  return moviesCopy;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const visibleMovies = filteredMovies(movies, query);

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
