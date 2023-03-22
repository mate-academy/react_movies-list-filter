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

function isSubstring(text: string, query: string): boolean {
  return text.toLowerCase().includes(query);
}

function filterMovies(query: string): Movie[] {
  return moviesFromServer.filter(movie => {
    const { title, description } = movie;
    const correctQuery = query.toLowerCase().trim();

    return isSubstring(title, correctQuery)
      || isSubstring(description, correctQuery);
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
