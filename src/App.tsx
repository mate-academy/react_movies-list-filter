import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  // const filterMovies = (searchKey: string) => {
  //   const input = searchKey.toLowerCase().trim();

  //   return moviesFromServer.filter(movie => {
  //     const title = movie.title.toLowerCase();
  //     const description = movie.description.toLowerCase();

  //     return title.includes(input) || description.includes(input);
  //   });
  // };

  const filterMovies = (searchWord: string) => {
    const word = searchWord.toLowerCase().trim();

    return moviesFromServer.filter(movies => {
      const title = movies.title.toLowerCase();
      const description = movies.description.toLowerCase();

      return title.includes(word) || description.includes(word);
    });
  };

  const visibleMovies = filterMovies(query);

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
