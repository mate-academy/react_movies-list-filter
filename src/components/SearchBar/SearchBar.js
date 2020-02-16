import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ data }) => (
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
          onChange={e => data(e.target.value)}
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  data: PropTypes.func.isRequired,
};
