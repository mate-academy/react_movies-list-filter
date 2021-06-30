import React from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

export const Search = ({ search, handleChange }) => (
  <div className="box">
    <div className="field">
      <label className="label">
        Search movie
        <input
          type="text"
          className="input"
          name="search"
          placeholder="Type search word"
          value={search}
          onChange={handleChange}
        />
      </label>
    </div>
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
