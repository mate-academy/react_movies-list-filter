import React from 'react';
import './App.scss';
import { MovieFilter } from './components/MovieFilter';
import moviesFromServer from './api/movies.json';

const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieFilter allMovies={moviesFromServer} />
    </div>
    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
);

export default App;
