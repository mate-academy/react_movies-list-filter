import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
  state = {
    query: '',
  }

  onChange = (e) => {
    const { moviesFilter } = this.props;
    const { value } = e.target;

    this.setState({
      query: value,
    });
    moviesFilter(value);
  }

  render() {
    const { query } = this.state;

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
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  moviesFilter: PropTypes.func.isRequired,
};
