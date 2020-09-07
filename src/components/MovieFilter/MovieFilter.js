import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class MovieFilter extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  }

  render() {
    const filteredMovies = [...this.props.allMovies]
      .filter(movie => movie.title.toLowerCase()
        .includes(this.state.query)
          || movie.description.toLowerCase()
            .includes(this.state.query));

    return (
      <>
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
                value={this.state.query}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMovies} />
      </>
    );
  }
}

MovieFilter.propTypes = {
  allMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
};

MovieFilter.defaultProps = {
  allMovies: [],
};
