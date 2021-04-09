import React from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends React.Component {
  state = {
    query: '',
  }

  handleChange = (e) => {
    const { list } = this.props;
    const { value } = e.target;

    this.setState({
      query: value,
    });
    list(value);
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
              value={query}
              onChange={this.handleChange}
              id="search-query"
              className="input"
              placeholder="Type search word"
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  list: PropTypes.func.isRequired,
};
