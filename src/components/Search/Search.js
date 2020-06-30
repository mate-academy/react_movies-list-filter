import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.PureComponent {
  render() {
    return (
      <>
        <label htmlFor="search-query" className="label">
          Search movie
        </label>

        <div className="control">
          <input
            type="text"
            id="search-query"
            className="input"
            placeholder="Type search word"
            onChange={this.props.change}
          />
        </div>
      </>
    );
  }
}

Search.propTypes = {
  change: PropTypes.func.isRequired,
};
