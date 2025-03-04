import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value.toLowerCase();

    setQuery(inputValue);
    setValue(event.target.value);

    const filteredMovies = moviesFromServer.filter((movie) => {
      const titleContainsQuery
       = movie.title.toLowerCase().includes(query);
      const descriptionContainsQuery
       = movie.description.toLowerCase().includes(query);

      return titleContainsQuery || descriptionContainsQuery;
    });

    setVisibleMovies(filteredMovies);
  };

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
                value={value}
                onChange={handleSearch}
                placeholder="Type search word"
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
