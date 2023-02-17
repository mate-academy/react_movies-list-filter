/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

function getWordPart(word: string, part: string) {
  return word.toLowerCase().includes(part.toLowerCase().trim());
}

function getFilteredList(movieList: Movie[], keyWord: string) {
  const visibleMovies = movieList.filter(movie => (
    getWordPart(movie.title, keyWord) || getWordPart(movie.description, keyWord)
  ));

  return visibleMovies;
}

export const App: React.FC = () => {
  const [query, setStateQuery] = useState('');

  const handleQuaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStateQuery(e.target.value);
  };

  const visibleMovies = getFilteredList(moviesFromServer, query);

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
                value={query}
                onChange={handleQuaryChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
