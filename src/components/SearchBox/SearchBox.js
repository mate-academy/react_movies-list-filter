import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.scss';

export class SearchBox extends React.PureComponent {
  state = {
    query: '',
  };

  componentDidUpdate() {
    const { moviesFromServer, setVisibleMovies } = this.props;
    const visibleMovies = moviesFromServer
      .filter(movie => (
        (movie.title + movie.description)
          .toLowerCase()
          .includes(this.state.query.toLowerCase())
      ));

    setVisibleMovies(visibleMovies);
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

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
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  moviesFromServer: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setVisibleMovies: PropTypes.func.isRequired,
};
