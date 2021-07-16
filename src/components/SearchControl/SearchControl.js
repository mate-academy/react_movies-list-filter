import React from 'react';
import PropTypes from 'prop-types';

export const SearchControl = props => (
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
          onChange={({ target }) => {
            props.app.setSearchQuery(target.value);
          }}
        />
      </div>
    </div>
  </div>
);

SearchControl.propTypes = {
  app: PropTypes.shape({
    setSearchQuery: PropTypes.func.isRequired,
  }).isRequired,
};
