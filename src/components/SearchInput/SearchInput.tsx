import React from 'react';

type Props = {
  query: string;
  onChange(value: string): void;
};

export const SearchInput: React.FC<Props> = ({ query, onChange }) => (
  <label htmlFor="search-query" className="label">
    Search movie

    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        value={query}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
    </div>
  </label>
);
