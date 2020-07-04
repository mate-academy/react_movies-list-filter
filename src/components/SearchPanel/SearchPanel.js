import React from 'react';
import PropTypes from 'prop-types';

export class SearchPanel extends React.Component {
  state = {
    query: '',
  };

  handleInput = (queryString, saveFunc, inputData) => {
    this.setState({
      query: queryString,
    }, () => saveFunc(this.moviesFilter(inputData)));
  };

  filmFiltration = (movie) => {
    const description = movie.description.toLowerCase();
    const title = movie.title.toLowerCase();
    const query = this.state.query.toLowerCase();

    return (description.includes(query)
    || title.includes(query));
  }

  moviesFilter = films => films.filter(this.filmFiltration);

  render() {
    const { saveSearch, inputData } = this.props;

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
            onChange={change => this
              .handleInput(change.target.value, saveSearch, inputData)}
            value={this.state.query}
          />
        </div>
      </div>
    );
  }
}

SearchPanel.propTypes = {
  saveSearch: PropTypes.func.isRequired,
  inputData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
