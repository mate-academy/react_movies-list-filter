import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Props = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
};

function filterMovies(query: string, films: Props[]) {
  const lowCaseQuery = query.toLowerCase().trim();

  const includesQuery
  = (string: string) => string.toLowerCase().includes(lowCaseQuery);
  const visibleMovies
    = films.filter(({ title, description }) => includesQuery(title)
    || includesQuery(description));

  return visibleMovies;
}

export const App: React.FC = () => {
  const [query, setNewQuery] = useState('');
  const visibleMovies = filterMovies(query, moviesFromServer);

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
                onChange={(event) => setNewQuery(event.target.value)}
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
