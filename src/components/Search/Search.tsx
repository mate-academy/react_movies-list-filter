import React, { useState } from 'react';

type Props = {
  movies: Movie[];
  findMovies: (filteredMovieList: Movie[]) => void;
};
export const Search: React.FC<Props> = ({ movies, findMovies }) => {
  const [query, setQuery] = useState('');

  const getFilteredMovieList = (input: string) => {
    setQuery(input);
    const inputNormalized = input.toLocaleLowerCase();

    const filteredMovieList = movies.filter(({ title, description }) => {
      return (title.toLocaleLowerCase().includes(inputNormalized)
        || description.toLocaleLowerCase().includes(inputNormalized));
    });

    findMovies(filteredMovieList);
  };

  return (
    <>
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
              onChange={event => getFilteredMovieList(event.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
