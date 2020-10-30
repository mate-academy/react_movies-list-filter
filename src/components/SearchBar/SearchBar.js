import React from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ enteredText, filterByQuery }) => (
  <div className="field">
    <label htmlFor="enteredText" className="label">
      Search movie
    </label>
    <div className="control">
      <input
        type="text"
        id="enteredText"
        className="input"
        placeholder="Type search word"
        name="enteredText"
        value={enteredText}
        onChange={filterByQuery}
      />
    </div>
  </div>
);

SearchBar.propTypes = {
  filterByQuery: PropTypes.func.isRequired,
  enteredText: PropTypes.string.isRequired,
};
