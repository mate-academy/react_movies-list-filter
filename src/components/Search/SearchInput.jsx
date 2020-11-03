import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ searchMovi }) => (
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
        onChange={searchMovi}
      />
    </div>
  </div>
);

SearchInput.propTypes = {
  searchMovi: PropTypes.func.isRequired,
};

export default SearchInput;
