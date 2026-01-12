import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const normalized = query.trim().toLowerCase();
  const visibleMovies = moviesFromServer.filter((movie) => {

    const title = movie.title.toLowerCase();
    const descr = movie.description.toLowerCase();

    return title.includes(normalized) || descr.includes(normalized);
     /* aqui retorna o titulo ou a descriçao se in
    se incluirem o valor digitado no input, passado para o query e transformado em minuscula pelo normalized*/
  })


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
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList
          movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
