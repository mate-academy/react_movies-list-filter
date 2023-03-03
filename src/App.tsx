import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search/Search';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [selectedMovies, setSelectedMovies] = useState('');

  const changeMovies = (value: string) => {
    setSelectedMovies(value);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Search
            selectedMovies={selectedMovies}
            changeMovies={changeMovies}
          />
        </div>

        <MoviesList selectedMovies={selectedMovies} movies={moviesFromServer} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
