import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ query, onQueryChange }) => {
  const handleChange = (evt) => {
    onQueryChange(evt.target.value);
  };

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
            value={query}
            onChange={evt => handleChange(evt)}
          />
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
  query: PropTypes.string,
};

SearchBar.defaultProps = {
  query: '',
};
