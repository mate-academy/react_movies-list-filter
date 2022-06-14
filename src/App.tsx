import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search/Search';
import { Movie } from './Types/Movie';

export const App: React.FC = () => {
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>(moviesFromServer);

  const getFilteredMovieList = (input: string) => {
    const inputNormalized = input.toLocaleLowerCase();

    const filteredMovieList: Movie[] = moviesFromServer.filter(
      ({ title, description }) => {
        return (title.toLocaleLowerCase().includes(inputNormalized)
          || description.toLocaleLowerCase().includes(inputNormalized));
      },
    );

    setVisibleMovies(filteredMovieList);
  };

  return (
    <div className="page">
      <div className="page-content">
        <Search getQuery={getFilteredMovieList} />

        <MoviesList movies={visibleMovies} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
