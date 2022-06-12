import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export const App: React.FC = () => {
  const [visibleMovies, findMovies] = useState(moviesFromServer);

  return (
    <div className="page">
      <div className="page-content">
        <Search
          movies={moviesFromServer}
          findMovies={findMovies}
        />

        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
