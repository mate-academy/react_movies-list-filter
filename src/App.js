import React from 'react';
import './App.scss';
import SearchBox from './components/Search/SearchBox';
import moviesFromServer from './api/movies.json';

export const App = React.memo(
  () => (
    <div className="page">
      <SearchBox movies={moviesFromServer} />
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  ),
);
