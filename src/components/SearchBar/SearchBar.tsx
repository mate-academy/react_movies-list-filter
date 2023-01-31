import { FC } from 'react';

type Props = {
  query: string,
  onChange: (query: string) => void,
};

export const SearchBar: FC<Props> = ({ query, onChange }) => (
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
          onChange={({ target }) => onChange(target.value)}
        />
      </div>
    </div>
  </div>
);
