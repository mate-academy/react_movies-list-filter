import React, { ChangeEventHandler } from 'react';

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBar: React.FC<Props> = (props) => {
  const { handleChange } = props;

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
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
