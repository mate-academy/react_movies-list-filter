import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

const сomplianceСheckFields = (field: string, query: string) => {
  return field.toLowerCase().includes(query.toLowerCase().trim());
};

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const visibleMovies = moviesFromServer
    .filter(({ title, description }) => (
      сomplianceСheckFields(title, searchQuery)
        || сomplianceСheckFields(description, searchQuery)
    ));

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
                onChange={handleChange}
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
