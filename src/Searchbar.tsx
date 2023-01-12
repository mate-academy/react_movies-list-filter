import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const SearchBar: React.FC<Props> = ({ value, onChange, ...props }) => {
  return (
    <input
      type="text"
      id="search-query"
      className="input"
      placeholder="Type search word"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
