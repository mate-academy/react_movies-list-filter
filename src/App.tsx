import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleMovies, setVisibleMovies] = useState([...moviesFromServer]);

  useEffect(() => {
    setVisibleMovies(
      searchQuery
        ? moviesFromServer.filter(movie => {
          const title = movie.title.toLowerCase();
          const description = movie.description.toLowerCase();
          const querry = searchQuery.trim().toLowerCase();

          return title.search(querry) >= 0 || description.search(querry) >= 0;
        })
        : [...moviesFromServer],
    );
  }, [searchQuery]);

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
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
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
