import { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [search, setSearch] = useState('');

  const listCopy = [...moviesFromServer]
    .filter(el => el.title.toLocaleLowerCase().includes(search)
        || el.description.toLocaleLowerCase().includes(search));

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
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
                value={search}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={listCopy} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
