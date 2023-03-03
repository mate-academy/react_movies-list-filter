import React from 'react';

type Props = {
  selectedMovies: string;
  changeMovies: (value: string) => void;
};

export const Search: React.FC<Props> = ({
  selectedMovies,
  changeMovies,
}) => {
  return (
    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          value={selectedMovies}
          onChange={(e) => {
            changeMovies(e.target.value);
          }}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </div>
  );
};
