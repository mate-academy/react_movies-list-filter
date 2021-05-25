import React from 'react';
import './App.scss';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <Search
        movies={moviesFromServer}
      />
    </div>
    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
);
