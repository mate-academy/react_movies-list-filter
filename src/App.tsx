import React, { useMemo, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [findMovie, setFindMovie] = useState('');
  const copyMovie = [...moviesFromServer];

  const findYourMovie = useMemo(() => copyMovie.filter(movie => {
    const findTitle = movie.title.toLowerCase().includes(findMovie.toLowerCase());
    const findDescription = movie.description.toLowerCase().includes(findMovie.toLowerCase());
    /* eslint-disable-next-line */
    console.log(findMovie);

    return findTitle || findDescription;
  }), [copyMovie]);

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
                value={findMovie}
                onChange={(event) => setFindMovie(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={findYourMovie} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
