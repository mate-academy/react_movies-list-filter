import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  // Estado controlado do campo de busca
  const [query, setQuery] = useState('');

  // Filtra filmes cujo título ou descrição contenham o termo buscado
  // trim() remove espaços extras | toLowerCase() garante busca case-insensitive
  const visibleMovies = moviesFromServer.filter(movie => {
    const normalizedQuery = query.trim().toLowerCase();

    return (
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery)
    );
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
              {/* Input controlado: value vinculado ao state, onChange atualiza a query */}
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

        {/* Renderiza apenas os filmes que correspondem à busca */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
