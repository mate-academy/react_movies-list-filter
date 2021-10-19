import React from 'react';

type Props = {
  onChangeFunction: (value: string) => void;
};

export const Search: React.FC<Props> = ({ onChangeFunction }) => (
  <div className="box">
    <div className="field">
      {/* eslint-disable-next-line */}
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          onChange={(event) => {
            onChangeFunction(event.target.value);
          }}
        />
      </div>
    </div>
  </div>
);
