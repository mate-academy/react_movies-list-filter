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

const getFilteredMovieList = (movieList: Movie[], query: string): Movie[] => {
  return movieList.filter(movie => {
    const movieName = movie.title.toLowerCase();
    const movieDescription = movie.description.toLowerCase();
    const movieQuery = query.toLowerCase();

    return (movieName.includes(movieQuery)
      || movieDescription.includes(movieQuery));
  });
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = getFilteredMovieList(moviesFromServer, query);

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
                onChange={(e) => setQuery(e.target.value)}
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
