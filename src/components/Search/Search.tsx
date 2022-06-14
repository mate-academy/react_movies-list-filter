import React, { useState } from 'react';

type Props = {
  getQuery: (query: string) => void;
};
export const Search: React.FC<Props> = ({ getQuery }) => {
  const [query, setQuery] = useState<string>('');

  return (
    <>
      <div className="box">
        <div className="field">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
              onChange={event => {
                setQuery(event.target.value);
                getQuery(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
