import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App:React.FC = () => {
  const [query, setQuery] = useState('');
  const [visibleMovies, setvisibleMovies] = useState(moviesFromServer);

  const filterList = () => (
    setvisibleMovies(moviesFromServer.filter((movie) => {
      const { title, description } = movie;

      return ((title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
       || (description.toLocaleLowerCase().includes(query.toLocaleLowerCase())));
    }))
  );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={query}
                  onChange={
                    (event) => {
                      setQuery(event.target.value);
                      filterList();
                    }
                  }
                />
              </div>
            </label>
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
