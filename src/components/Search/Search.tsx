import React from 'react';

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export const Search: React.FC<Props> = ({
  query,
  setQuery,
}) => {
  const changeQuery = (e: React.SyntheticEvent) => {
    setQuery((e.target as HTMLInputElement).value);
  };

  return (
    <div className="field">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          value={query}
          onChange={changeQuery}
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
        />
      </div>
    </div>
  );
};
