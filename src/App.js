import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';

export const App = () => (
  <div className="page">
    <Search movies={moviesFromServer} />
    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
);
