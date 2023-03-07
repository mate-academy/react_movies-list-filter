import React, { ChangeEvent, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

type MovieSearchFilters = {
  title: string,
  description: string
};

const formatString = (string: string): string => {
  return string.toLocaleLowerCase().trim();
};

const checkMovie = ({
  title,
  description,
}: MovieSearchFilters,
query: string) => {
  const formattedQuery = formatString(query);
  const formattedTitle = formatString(title);
  const formattedDescription = formatString(description);
  const isTitleContainsQuery = formattedTitle.includes(formattedQuery);
  const isDescriptionContainsQuery
    = formattedDescription.includes(formattedQuery);

  return isTitleContainsQuery || isDescriptionContainsQuery;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const visibleMovies = moviesFromServer
    .filter(movie => checkMovie(movie, query));

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setQuery(inputValue);
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
                value={query}
                onChange={handleCheck}
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
