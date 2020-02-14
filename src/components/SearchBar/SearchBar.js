import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onChangeFilter }) => (
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
        onChange={onChangeFilter}
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default SearchBar;
