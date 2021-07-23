import React from 'react';
import PropTypes from 'prop-types';

export class ControlsInput extends React.Component {
  state = {
    query: '',
  }

  setQuery = (event) => {
    this.setState({ query: event.target.value });
  }

  getFilteredMovies = (event) => {
    const { moviesFromServer, setFilteredMovies } = this.props;

    const filteredMovies = moviesFromServer.filter(
      movie => movie.title.toLowerCase()
        .includes(event.target.value.toLowerCase())
      || movie.description.toLowerCase()
        .includes(event.target.value.toLowerCase()),
    );

    setFilteredMovies(filteredMovies);
  }

  render() {
    return (
      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          value={this.state.query}
          onChange={(event) => {
            this.setQuery(event);
            this.getFilteredMovies(event);
          }}
        />
      </div>
    );
  }
}

ControlsInput.propTypes = {
  moviesFromServer: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setFilteredMovies: PropTypes.func.isRequired,
};
