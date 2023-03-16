import React, { useState } from 'react';
import { Movie } from './types/movie';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function moviesToRender(allMovies: Movie[], query: string): Movie[] {
  return allMovies.filter(({ title, description }) => {
    const lowerQuery: string = query.toLocaleLowerCase().trim();

    return (
      title.toLocaleLowerCase().includes(lowerQuery)
      || description.toLocaleLowerCase().includes(lowerQuery)
    );
  });
}

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const visibleMovies: Movie[] = moviesToRender(moviesFromServer, query);

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
        Sidebar goes here
      </div>
    </div>
  );
};
