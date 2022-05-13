import React, { useState, useMemo } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { MovieDescriptioin } from './interfaces/MovieDescription';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [catchServerData]
  = useState<Array<MovieDescriptioin>>(moviesFromServer);
  const [searchFieldPattern, setSearchFieldPattern] = useState<string>('');

  const filteredData = useMemo(() => {
    const loverRegisterPattern = searchFieldPattern.toLowerCase();

    return catchServerData.filter(movieDescr => (
      movieDescr.title.toLowerCase().includes(loverRegisterPattern)
      || movieDescr.description.toLowerCase().includes(loverRegisterPattern)));
  }, [searchFieldPattern]);

  const handleChangeEvent = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setSearchFieldPattern(value);
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
                value={searchFieldPattern}
                onChange={handleChangeEvent}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredData} />
      </div>
      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
