import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
  render() {
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
              onChange={this.props.param}
            />
          </div>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  param: PropTypes.func.isRequired,
};

export default Input;
