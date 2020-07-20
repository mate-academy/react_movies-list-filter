import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
      movies: this.props.movies,
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });

    const search = this.state.query.length !== 0
      ? this.state.movies
        .filter(movie => movie.title
          .toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase())
          || movie.description
            .toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase()))
      : this.state.movies;

    this.state.search(search);
  }

  render() {
    return (
      <div className="box">
        <div className="field">
          <label htmlFor="search-query" className="label">
            Search movie
            {this.state.query}
          </label>

          <div className="control">
            <input
              type="text"
              id="search-query"
              className="input"
              placeholder="Type search word"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.instanceOf(Function).isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ),
};

Search.defaultProps = {
  movies: [],
};
