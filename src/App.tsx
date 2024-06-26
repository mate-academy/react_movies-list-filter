import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

import { Movie } from './types/Movie';

function prepareVisibleMovies(moviesList: Movie[], query: string): Movie[] {
  const movies = [...moviesList].filter(movie => {
    const { title, description } = movie;

    if (description.toLowerCase().includes(query.toLowerCase().trim())) {
      return true;
    }

    if (title.toLowerCase().includes(query.toLowerCase().trim())) {
      return true;
    }

    return false;
  });

  return movies;
}

export const App = () => {
  const [query, setQuery] = useState<string>('');
  const visibleMovies = prepareVisibleMovies(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <SearchBar
          sortByQuery={queryString => {
            setQuery(queryString);
          }}
        />
        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
