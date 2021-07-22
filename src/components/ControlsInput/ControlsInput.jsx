import React from 'react';
import PropTypes from 'prop-types';

export class ControlsInput extends React.Component {
  state = {
    query: '',
  }

  filtering = (event) => {
    const { moviesFromServer, setFilteredMovieList } = this.props;

    this.setState({ query: event.target.value });

    const filteringMovieList = moviesFromServer.filter(
      movie => movie.title.toLowerCase()
        .includes(event.target.value.toLowerCase())
      || movie.description.toLowerCase()
        .includes(event.target.value.toLowerCase()),
    );

    setFilteredMovieList(filteringMovieList);
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
          onChange={event => this.filtering(event)}
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
  setFilteredMovieList: PropTypes.func.isRequired,
};
