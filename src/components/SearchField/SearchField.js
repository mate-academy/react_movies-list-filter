import React from 'react';
import PropTypes from 'prop-types';

export class SearchField extends React.PureComponent {
  render() {
    const { search } = this.props;

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
            onChange={search}
          />
        </div>
      </div>
    );
  }
}

SearchField.propTypes = {
  search: PropTypes.func.isRequired,
};
