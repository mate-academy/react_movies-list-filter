import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField/SearchField';

export const App = () => (
  <div className="page">
    <SearchField movies={moviesFromServer} />
    <div className="sidebar">
      Sidebar goes here
    </div>
  </div>
);
