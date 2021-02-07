import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export class SearchInput extends React.Component {
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
              onChange={this.props.setSearchQuery}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};
