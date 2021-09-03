import React from 'react';

type Props = {
  queryUpdateFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: React.FC<Props> = (props) => {
  const { queryUpdateFunction } = props;

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
            onChange={queryUpdateFunction}
          />
        </div>
      </div>
    </div>
  );
};
