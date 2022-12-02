import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function includesСharacters(text: string, characters: string) {
  return text.toLowerCase().includes(characters);
}

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const lowerText = query.toLowerCase();

  const filteredMovies = moviesFromServer.filter(({ title, description }) => (
    includesСharacters(title, lowerText)
    || includesСharacters(description, lowerText)
  ));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

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
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
