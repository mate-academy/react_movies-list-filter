import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handler }) => (
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
          onChange={handler}
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Search;
