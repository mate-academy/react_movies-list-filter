import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar/SearchBar';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [query, updateQuery] = useState('');

  const handleChange = (inputValue) => {
    updateQuery(inputValue.toLowerCase());
  };

  const filteredMovies = moviesFromServer.filter(
    movie => movie.title.toLowerCase().includes(query)
    || movie.description.toLowerCase().includes(query),
  );

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar onInputChange={handleChange} />
        <MoviesList movies={filteredMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
