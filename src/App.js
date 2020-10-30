import React from 'react';
import './App.scss';
import Search from './components/Search/Search';
import moviesFromServer from './api/movies.json';

export const App = React.memo(
  () => (
    <div className="page">
      <Search movies={moviesFromServer} />
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  ),
);
