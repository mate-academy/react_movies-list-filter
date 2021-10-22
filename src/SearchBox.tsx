import React from 'react';

interface Props {
  query: string
  changeQuery: (event: string) => void
}

export const SearchBox: React.FC<Props> = ({ query, changeQuery }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
        <div className="control">
          <input
            type="text"
            value={query}
            id="search-query"
            className="input"
            placeholder="Type search word"
            onChange={(event) => {
              changeQuery(event.target.value);
            }}
          />
        </div>
      </label>
    </div>
  </div>
);