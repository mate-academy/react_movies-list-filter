import React from 'react';
import PropTypes from 'prop-types';

export const SearchField = ({ query, changeHandler }) => (
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
          value={query}
          onChange={event => changeHandler(event)}
        />
      </div>
    </div>
  </div>
);

SearchField.propTypes = {
  query: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
