import React, { Component } from 'react';
import './SearchForm.scss';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
  handlerChange = (event) => {
    this.props.handler(event.target.value);
  }

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
              onChange={this.handlerChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchForm.propTypes = {
  handler: PropTypes.func.isRequired,
};
