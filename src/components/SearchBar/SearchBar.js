import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ content, callback }) => (
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
          value={content}
          onChange={callback}
          placeholder="Type search word"
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  content: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
