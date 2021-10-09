import React from 'react';

type Props = {
  query: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: React.FC<Props> = (props) => {
  const { query, handler } = props;

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
            value={query}
            onChange={handler}
            placeholder="Type search word"
          />
        </div>
      </div>
    </div>
  );
};
