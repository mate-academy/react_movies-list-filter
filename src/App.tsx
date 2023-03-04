import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search/Search';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <Search
            query={query}
            setQuery={setQuery}
          />
        </div>

        <MoviesList query={query} movies={moviesFromServer} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
