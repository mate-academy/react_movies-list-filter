import React from 'react';
import PropTypes from 'prop-types';

export class SearchMovie extends React.PureComponent {
  state = {
    query: '',
  }

  changeQuery = ({ target }) => {
    this.setState({
      query: target.value,
    });

    this.props.filterMovie(target.value.toLowerCase());
  }

  render() {
    const {
      state: { query },
      changeQuery,
    } = this;

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
            value={query}
            onChange={changeQuery}
          />
        </div>
      </div>
    );
  }
}

SearchMovie.propTypes = {
  filterMovie: PropTypes.func.isRequired,
};
