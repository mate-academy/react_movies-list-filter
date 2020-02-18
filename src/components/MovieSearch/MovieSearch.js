import React from 'react';
import PropTypes from 'prop-types';

export const MovieSearch = ({ query, changeHandler }) => {
  const onChangeHandler = (evt) => {
    changeHandler(evt.target.value);
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
          onChange={evt => onChangeHandler(evt)}
        />
      </div>
    </div>
  );
};

MovieSearch.defaultProps = {
  query: '',
};

MovieSearch.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  query: PropTypes.string,
};
