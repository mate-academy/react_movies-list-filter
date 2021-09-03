import React from 'react';

interface Props {
  query: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<Props> = (props) => {
  const { query, changeHandler } = props;

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
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};
