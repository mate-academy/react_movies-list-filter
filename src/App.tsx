/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleFilms, setFilms] = useState([...moviesFromServer]);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <div className="control">
              <label className="label">
                Search movie
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  value={query}
                  placeholder="Type search word"
                  onChange={(event) => {
                    const keyWord = event.target.value;

                    setQuery(keyWord);
                    setFilms([...moviesFromServer]
                      .filter(movie => {
                        const { title, description } = movie;

                        return title.toLowerCase().includes(keyWord.toLowerCase())
                        || description.toLowerCase().includes(keyWord.toLowerCase());
                      }));
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        <MoviesList movies={visibleFilms} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
