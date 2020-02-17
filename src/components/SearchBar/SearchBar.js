import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ changeFilter }) => (
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
          onChange={e => changeFilter(e.target.value)}
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
