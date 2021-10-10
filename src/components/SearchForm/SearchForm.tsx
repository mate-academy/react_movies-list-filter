import React from 'react';

type Props = {
  query: string,
  action: any,
};

export const SearchForm: React.FC<Props> = (props) => {
  const { query, action } = props;

  return (
    <label className="label" htmlFor="search">
      Search movie
      <input
        type="text"
        id="search"
        className="input"
        placeholder="Type search word"
        value={query}
        onChange={action}
      />
    </label>
  );
};
