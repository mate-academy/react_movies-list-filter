import React from 'react';
import PropTypes from 'prop-types';

export class Box extends React.PureComponent {
  render() {
    const { query, changeHandler } = this.props;

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
              value={query}
              onChange={event => changeHandler(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

Box.propTypes = {
  query: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};
