import React from 'react';

type Props = {
  onChangeCallback: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: React.FC<Props> = (props) => {
  const { onChangeCallback } = props;

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
            onChange={onChangeCallback}
          />
        </div>
      </div>
    </div>
  );
};
