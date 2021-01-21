import React from 'react';
import PropTypes from 'prop-types';

import './SearchBox.scss';

export const SearchBox = ({ query, returnValue }) => (
  <div className="box">
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          value={query}
          className="input"
          placeholder="Type search word"
          onChange={(event) => {
            returnValue(event.target.value);
          }}

        />
      </div>
    </div>
  </div>
);

SearchBox.propTypes = {
  query: PropTypes.string,
  returnValue: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {
  query: '',
};
