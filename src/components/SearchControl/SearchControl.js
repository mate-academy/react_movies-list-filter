import React from 'react';
import PropTypes from 'prop-types';

export const SearchControl = ({ setSearchQuery }) => (
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
          onChange={setSearchQuery}
        />
      </div>
    </div>
  </div>
);

SearchControl.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};
