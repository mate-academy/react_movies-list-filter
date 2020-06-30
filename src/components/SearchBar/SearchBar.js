import React from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends React.PureComponent {
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
              onChange={event => this.props.onChange(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
