import React from 'react';
import PropTypes from 'prop-types';

export class SearchQuery extends React.Component {
  state = {
    query: '',
  };

  render() {
    const { filterFilm } = this.props;

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
            value={this.state.query}
            onChange={(event) => {
              this.setState({
                query: event.target.value,
              });
              filterFilm(event.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

SearchQuery.propTypes = {
  filterFilm: PropTypes.func.isRequired,
};
