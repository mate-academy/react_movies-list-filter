import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import Cosmo from './static/cosmolot.png';

interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

const checkMovie = (moviesList: Movie[], query: string) => {
  const visibleMovies = moviesList.filter(movie => {
    const title = movie.title.toLowerCase();
    const description = movie.description.toLowerCase();
    const queryNorm = query.toLowerCase().trim();

    return title.includes(queryNorm) || description.includes(queryNorm);
  });

  return visibleMovies;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = checkMovie(moviesFromServer, query);

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
                onChange={event => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        <img src={Cosmo} alt="" />
      </div>
    </div>
  );
};
