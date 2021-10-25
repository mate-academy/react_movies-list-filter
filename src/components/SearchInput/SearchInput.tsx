import React from 'react';

type Props = {
  query: string,
  onChanged(value: string): void,
};

export const SearchInput: React.FC<Props> = ({ query, onChanged }) => (
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
            onChange={(event) => {
              onChanged(event.target.value);
            }}
          />
        </div>
      </label>
    </div>
  </div>
);
