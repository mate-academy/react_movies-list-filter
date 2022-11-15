import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Movie = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

function filterMovies(movies: Movie[], query: string) {
  const visibleMovies = movies.filter(movie => {
    const titleExists = movie.title.toLowerCase().includes(query);
    const descriptionExists = movie.description.toLowerCase().includes(query);

    return titleExists || descriptionExists;
  });

  return visibleMovies;
}

export const App: React.FC = () => {
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
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value.toLowerCase());
                }}
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
