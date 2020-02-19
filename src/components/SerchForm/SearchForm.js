import React from 'react';
import PropTypes from 'prop-types';

import './SearchForm.scss';

export const SearchForm = (props) => {
  const handlerChange = (event) => {
    props.onSearch(event.target.value);
  };

  return (
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
            onChange={handlerChange}
          />
        </div>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
