import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ callBack }) => (
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
          onChange={(event => callBack(event.target.value))}
        />
      </div>
    </div>
  </div>
);

SearchBar.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default SearchBar;
