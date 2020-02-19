import React from 'react';
import PropTypes from 'prop-types';

export const MovieSearch = ({ query, changeHandler }) => {
  const onChangeHandler = (event) => {
    changeHandler(event.target.value);
  };

  return (
    <div className="box">
      <div className="field">
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <input
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          value={query}
          onChange={event => onChangeHandler(event)}
        />
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  query: PropTypes.string,
};

MovieSearch.defaultProps = {
  query: '',
};
