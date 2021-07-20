import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchField extends Component {
  render() {
    const{value, onChange} = this.props;
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
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
    )
  }
}
