import React from 'react';
import PropTypes from 'prop-types';

export class Search extends React.Component {
  state = {
    query: '',
  };

  filter = () => {
    const { movies, onFilter } = this.props;
    const { query } = this.state;

    const filteredMovies = movies.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
    ));

    onFilter(filteredMovies);
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState(
      {
        query: value,
      },
      this.filter,
    );
  };

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
              name="query"
              value={query}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
  onFilter: PropTypes.func.isRequired,
};

Search.defaultProps = {
  movies: [],
};
