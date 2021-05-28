import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <Search moviesList={moviesFromServer} />
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  </div>
);
