import React from 'react';
import PropTypes from 'prop-types';

import { SearchField } from '../SearchField';
import { MoviesList } from '../MoviesList';

export class PageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies,
    };
  }

  search = (e) => {
    const { movies } = this.props;
    const regExp = new RegExp(e.target.value, 'i');
    const moviesSearch = movies
      .filter(
        movie => regExp.test(movie.title) || regExp.test(movie.description),
      );

    this.setState({
      movies: moviesSearch,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page-content">
        <div className="box">
          <SearchField search={this.search} />
        </div>

        <MoviesList movies={movies} />
      </div>
    );
  }
}

PageContent.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
