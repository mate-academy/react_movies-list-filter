import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function search(el1: string, el2: string, input: string) {
  const title = el1.toLocaleLowerCase();
  const description = el2.toLocaleLowerCase();
  const query = input.toLocaleLowerCase().trim();

  return title.includes(query) || description.includes(query);
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  // function handleChange(event: any) {
  //   let { name, value } = event.target;

  //   return setQuery([name] = value);
  // }

  const visibleMovies = moviesFromServer.filter(
    (movie => search(movie.title, movie.description, query)),
  );

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
                name="search-query"
                id="search-query"
                className="input"
                value={query}
                placeholder="Type search word"
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
