/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type Movies = {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
};

export const App: React.FC = () => {
  const movieList = [...moviesFromServer];
  const [movies, setMovies] = useState<Movies[]>(movieList);
  const [searchValue, setSearchValue] = useState<string>('');
  const preRender = ():void => {
    const sortedMovies = movieList.filter(movie => {
      const title = movie.title.toLowerCase();
      const descr = movie.description.toLocaleLowerCase();
      const substring = searchValue.toLocaleLowerCase();

      if (searchValue === ''
          || descr.includes(substring)
          || title.includes(substring)) {
        return true;
      }

      return false;
    });

    setMovies(sortedMovies);
  };

  useEffect(() => {
    preRender();
  }, [searchValue]);

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
                value={searchValue}
                onChange={event => setSearchValue(() => event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
