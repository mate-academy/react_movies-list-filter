/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ query, onChange }) => (
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
          name="search-query"
          value={query}
          onChange={onChange}
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Search.defaultProps = { query: '' };
