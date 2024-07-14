import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export type Movie = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const filterMovies = (list: Movie[]) => {
    let tmp = [...list];

    if (query.length > 0) {
      tmp = tmp.filter(
        movie =>
          movie.title
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase().trim()) ||
          movie.description
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase().trim()),
      );
    }

    return tmp;
  };

  const visibleMovies = filterMovies(moviesFromServer);

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
                onChange={e => setQuery(e.target.value)}
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
