import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const handleSearchInput = (event: React.FormEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const movies: Movie[] = moviesFromServer.filter(({ title, description }) => (
    title.toLowerCase().includes(query.toLowerCase())
    || description.toLowerCase().includes(query.toLowerCase())
  )) || moviesFromServer;

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar query={query} onChange={handleSearchInput} />

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
