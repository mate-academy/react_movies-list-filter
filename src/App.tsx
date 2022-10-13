import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const queryLowerCase = query.toLowerCase();
    const titleLowerCase = movie.title.toLowerCase();
    const descriptionLowerCase = movie.description.toLowerCase();

    const isTitle = titleLowerCase.includes(queryLowerCase);
    const isDescription = descriptionLowerCase.includes(queryLowerCase);

    if (isTitle || isDescription) {
      return true;
    }

    return false;
  });

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
