import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [inputData, setFilteredList] = useState('');
  const filteredList = moviesFromServer.filter(
    movie => movie.title.toLowerCase()
      .includes(inputData.toLocaleLowerCase().trim())
      || movie.description.toLowerCase()
        .includes(inputData.toLocaleLowerCase().trim()),
  );
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredList(event.target.value);
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
                value={inputData}
                onChange={handleChanges}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredList} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
