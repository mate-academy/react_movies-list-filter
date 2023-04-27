import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

// type Movie = {
//   title: string,
//   description: string,
//   imgUrl: string,
//   imdbUrl: string,
//   imdbId: string,
// };

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [moviesToRender, setMoviesToRender] = useState(moviesFromServer);

  useEffect(() => {
    setMoviesToRender([...moviesFromServer].filter(({ title, description }) => {
      return title.toLowerCase().includes(query.toLowerCase().trim())
    || description.toLowerCase().includes(query.toLowerCase().trim());
    }));
  }, [query]);

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
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={moviesToRender} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
