import React from 'react';

type Props = {
  value: string,
  onChange: (value: string) => void;
};

export const Search: React.FC<Props> = ({ value, onChange }) => (
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
          value={value}
          className="input"
          placeholder="Type search word"
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </div>
    </div>
  </div>
);
