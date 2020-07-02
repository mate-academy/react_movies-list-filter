import React from 'react';
import { MoviesList } from '../MoviesList/MoviesList';
import { SearchBar } from '../SearchBar/SearchBar';
import { ShapePageContent } from '../../Shapes/ShapePageContent';

export class PageContent extends React.Component {
  state = {
    query: this.props.movies,
  };

  handleChange = (event) => {
    const phrase = event.target.value.toLowerCase();
    const moviesFromServer = this.props.movies;

    this.setState({
      query: moviesFromServer.filter(movie => (
        movie.description.toLowerCase().includes(phrase)
          || movie.title.toLowerCase().includes(phrase)
      )),
    });
  }

  render() {
    const movies = this.state.query;

    return (
      <div className="page-content">
        <SearchBar onChange={this.handleChange} />

        <MoviesList movies={movies} />
      </div>
    );
  }
}

PageContent.propTypes = ShapePageContent;
