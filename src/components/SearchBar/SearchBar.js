import React from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends React.Component {
  state = {
    query: '',
  }

  handleSearch = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    this.props.onSubmit(value);
  }

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
              name="query"
              value={this.state.query}
              onChange={this.handleSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
