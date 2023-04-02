import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

interface Film {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

export const App: React.FC = () => {
  const [inputValue, changeFilm] = useState('');

  function findFilms(arr: Film[], str: string) {
    const correctInput = str.trim().toLowerCase();

    if (correctInput === '') {
      return arr;
    }

    return arr.filter(
      film => film.title.toLowerCase().includes(correctInput)
      || film.description.toLowerCase().includes(correctInput),
    );
  }

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
                value={inputValue}
                onChange={(event) => {
                  changeFilm(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={findFilms(moviesFromServer, inputValue)} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
