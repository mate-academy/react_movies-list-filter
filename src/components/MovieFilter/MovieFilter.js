import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MovieFilter extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { onChange } = this.props;

    onChange(value);
  }

  render() {
    const { query } = this.props;

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
              value={query}
              onChange={this.handleChange}
              className="input"
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>
    );
  }
}
