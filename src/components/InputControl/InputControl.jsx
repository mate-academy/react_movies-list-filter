import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchMovie extends PureComponent {
  render() {
    const { data, eventHandler } = this.props;

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
            value={data}
            name="data"
            onChange={eventHandler}
          />
        </div>
      </div>
    );
  }
}

SearchMovie.propTypes = {
  eventHandler: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};
