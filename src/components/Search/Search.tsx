import React from 'react';

interface Props {
  onChange: (value: string) => void;
}

export const Search: React.FC<Props> = ({ onChange }) => (
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
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
      </label>
    </div>
  </div>
);
