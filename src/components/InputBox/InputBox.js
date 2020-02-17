import React from 'react';
import PropTypes from 'prop-types';

function InputBox(props) {
  const { onChange } = props;

  return (

    <div className="box">
      <div className="field">
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control my-control">
          <input
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputBox;
