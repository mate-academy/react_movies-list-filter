import React from 'react';

interface Props {
  query: string;
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Props> = (props) => {
  const { query, action } = props;

  return (
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          name="query"
          id="search-query"
          className="input"
          placeholder="Type search word"
          value={query}
          onChange={action}
        />
      </div>
    </div>
  );
};
