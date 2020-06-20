import React from 'react';
import PropTypes from 'prop-types';

const checkMatches = (str, sub) => {
  const pattern = new RegExp(sub, 'i');

  return pattern.test(str);
};

class SearchField extends React.PureComponent {
  checkMatches = (str, sub) => {
    const pattern = new RegExp(sub, 'i');

    return pattern.test(str);
  }

  handleOnChange = (event) => {
    const { value } = event.target;

    const movies = this.props.moviesFromServer.filter(movie => (
      checkMatches(movie.title, value)
      || checkMatches(movie.description, value)
    ));

    this.props.filterMovies(value, movies);
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
              value={this.props.query}
              onChange={this.handleOnChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { SearchField };

SearchField.propTypes = {
  query: PropTypes.string.isRequired,
  filterMovies: PropTypes.func.isRequired,
  moviesFromServer: PropTypes.arrayOf(PropTypes.object).isRequired,
};
