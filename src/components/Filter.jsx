import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, query }) => (
  <div className="field">
    <label
      htmlFor="search-query"
      className="label"
    >
      Search movie
    </label>

    <div className="control">
      <input
        type="text"
        id="search-query"
        value={query}
        className="input"
        placeholder="Type search word"
        onChange={onChange}
      />
    </div>
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
