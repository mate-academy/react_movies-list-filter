import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ searchFilter }) => (
  <>
    <label htmlFor="search-query" className="label">
      Search movie
    </label>
    <div className="control">
      <input
        type="text"
        id="search-query"
        className="input"
        placeholder="Type search word"
        onChange={searchFilter}
      />
    </div>
  </>
);

SearchBar.propTypes = {
  searchFilter: PropTypes.func.isRequired,
};
