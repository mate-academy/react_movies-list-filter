import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.props.updateQuery(this.state.query);
    }
  }

  handleQueryChange = (event) => {
    this.setState(
      { query: event.target.value },
    );
  };

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
              onChange={this.handleQueryChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  updateQuery: PropTypes.func.isRequired,
};
