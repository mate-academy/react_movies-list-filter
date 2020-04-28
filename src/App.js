import React, { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField';
import { debounce } from './helpers/debounce';

export const App = () => {
  const [searchValue, setInputValue] = useState('');
  const [combinedMovies, setCombinedMovies] = useState(moviesFromServer);

  const debouncedSearch = debounce(value => setCombinedMovies(
    moviesFromServer.filter(
      ({ title, description }) => (title + description)
        .toLowerCase().includes(value),
    ),
  ), 1000);
  const searchMovies = ({ target }) => {
    const value = target.value.toLowerCase().slice(0, 20);

    setInputValue(value);
    debouncedSearch(value);
  };

  return (
    <div className="page">
      <div className="page-content">
        <SearchField
          value={searchValue}
          inputChangeHandler={searchMovies}
        />
        <MoviesList
          movies={combinedMovies}
          highlightSearchResult={searchValue}
        />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
