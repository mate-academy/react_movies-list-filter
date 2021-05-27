import React from 'react';
import './App.scss';
import { ListOfMovies } from './components/ListOfMovies';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <ListOfMovies
        movies={moviesFromServer}
      />
    </div>
    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
);
