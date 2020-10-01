import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Searcher.scss';

export class Searcher extends Component {
  onChange = (event) => {
    this.props.onChangeQuery(event.target.value);
  }

  render() {
    const { query } = this.props.query;

    return (
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
            value={query}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

Searcher.propTypes = {
  query: PropTypes.string,
  onChangeQuery: PropTypes.func.isRequired,
};

Searcher.defaultProps = {
  query: '',
};
