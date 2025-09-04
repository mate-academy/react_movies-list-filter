import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  // Passo 1: Gerenciando o estado da busca com useState
  const [searchQuery, setSearchQuery] = useState('');

  // Passo 2: Filtrando os filmes
  // A busca será insensível a maiúsculas e minúsculas, então convertemos tudo para minúsculas
  const normalizedQuery = searchQuery.toLowerCase().trim();

  const visibleMovies = moviesFromServer.filter(
    movie =>
      movie.title.toLowerCase().includes(normalizedQuery) ||
      movie.description.toLowerCase().includes(normalizedQuery),
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
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={searchQuery} // Conectando o valor do input ao estado
                onChange={event => setSearchQuery(event.target.value)} // Atualizando o estado na mudança
              />
            </div>
          </div>
        </div>

        {/* Passo 3: Passando a lista de filmes filtrada */}
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
