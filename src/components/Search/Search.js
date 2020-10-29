import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ onChange, query }) => (
  <div className="field">
    <label htmlFor="search-query" className="label">
      Search
    </label>

    <div className="control">
      <input
        type="text"
        name="query"
        id="search-query"
        className="input"
        placeholder="Example... The Holiday"
        onChange={onChange}
        value={query}
      />
    </div>
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
