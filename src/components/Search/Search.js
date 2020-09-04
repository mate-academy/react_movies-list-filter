import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
  handleSearchChange = (event) => {
    this.props.updateQuery(event.target.value.trim());
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
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  updateQuery: PropTypes.func.isRequired,
};
