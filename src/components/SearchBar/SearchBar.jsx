import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ filter, value }) => (
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
          value={value}
          onChange={filter}
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  value: '',
};
