import React from 'react';
import PropTypes from 'prop-types';

export const SearchFiled = ({ updateData }) => (
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
          onChange={
            event => updateData(event.target.value)
          }
        />
      </div>
    </div>
  </div>
);

SearchFiled.propTypes = {
  updateData: PropTypes.func.isRequired,
};
