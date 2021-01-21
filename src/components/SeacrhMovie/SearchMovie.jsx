import React from 'react';
import PropTypes from 'prop-types';

export const SearchMovie = ({ prevState, handleChange }) => (
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
          name="query"
          placeholder="Type search word"
          value={prevState.query}
          onChange={handleChange}
        />
      </div>
    </div>
  </div>
);

const prevStateType = PropTypes.shape({
  query: PropTypes.string,
});

SearchMovie.propTypes = {
  prevState: prevStateType.isRequired,
  handleChange: PropTypes.func.isRequired,
};
