import React from 'react';

interface Props {
  query: string;
  changeQuery: (value: string) => void;
}

export const SearchBar: React.FC<Props> = (props) => {
  const { query, changeQuery } = props;

  return (
    <div className="box">
      <div className="field">
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
            onChange={(event) => {
              changeQuery(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
