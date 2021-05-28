import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export class Search extends React.Component {
  state = {
    query: '',
  }

  render() {
    const { moviesList } = this.props;
    const { query } = this.state;
    let filteredMoveisList = [];
    const searchPhrase = query.toLocaleLowerCase();

    filteredMoveisList = moviesList.filter(({ title, description }) => (
      title.toLocaleLowerCase().includes(searchPhrase)
        || description.toLocaleLowerCase().includes(searchPhrase)
    ));

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
                onChange={(event) => {
                  this.setState({ query: event.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredMoveisList} />
      </>
    );
  }
}

Search.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
};

Search.defaultProps = {
  moviesList: [],
};
