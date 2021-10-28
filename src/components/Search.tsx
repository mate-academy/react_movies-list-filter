import React from 'react';

type Props = {
  query: string,
  setQuery: (value: string) => void,
};

export const Search: React.FC<Props> = ({ query, setQuery }) => (
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
            onChange={({ target }) => setQuery(target.value)}
          />
        </div>
      </label>
    </div>
  </div>
);
