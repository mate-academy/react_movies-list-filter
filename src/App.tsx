import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Query = {
  visibleMovies: Movie[],
  searchResults: string,
};

export const App: React.FC<Query> = () => {
  const [allMovies, setVisible] = useState<Query>({
    visibleMovies: moviesFromServer,
    searchResults: '',
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchResults = e.target.value;
    const visibleMovies = moviesFromServer.filter(movie => (
      movie.description.includes(searchResults)
      || movie.title.toLocaleLowerCase()
        .includes(searchResults.toLocaleLowerCase())
    ));

    setVisible({ visibleMovies, searchResults });
  };

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={allMovies.searchResults}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={allMovies.visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
