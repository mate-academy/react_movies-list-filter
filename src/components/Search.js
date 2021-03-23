import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ onChange }) => (
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
          onChange={onChange}
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};
