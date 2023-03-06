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
  const lowCaseQuery = query.toLowerCase();
  const visibleMovies
    = films.filter((movie) => movie.title.toLowerCase().includes(lowCaseQuery)
    || movie.description.toLowerCase().includes(lowCaseQuery));

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
