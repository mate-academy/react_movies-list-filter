import { FC, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import { getVisibleMovies } from './utils';
import moviesFromServer from './api/movies.json';

export const App: FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = getVisibleMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar query={query} onChange={setQuery} />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
