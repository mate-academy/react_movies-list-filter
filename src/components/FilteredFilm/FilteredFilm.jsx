import React from 'react';
import PropTypes from 'prop-types';

const FilteredFilm = ({ query, onChange }) => (
  <>
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
            onChange={onChange}
            className="input"
            placeholder="Type search word"
          />
        </div>
      </div>
    </div>
  </>
);

FilteredFilm.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilteredFilm;
