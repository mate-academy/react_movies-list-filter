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

function filterMovies(query: string): Movie[] {
  return moviesFromServer.filter(movie => {
    const { title, description } = movie;
    const regex = new RegExp(query.trim(), 'i');

    return regex.test(title) || regex.test(description);
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = filterMovies(query);

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
