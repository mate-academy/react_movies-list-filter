import React from 'react';
import { MoviesList } from '../MoviesList/MoviesList';
import { SearchBar } from '../SearchBar/SearchBar';
import { ShapePageContent } from '../../Shapes/ShapePageContent';

export class PageContent extends React.PureComponent {
  render() {
    return (
      <div className="page-content">
        <SearchBar onChange={this.props.onChange} />

        <MoviesList movies={this.props.movies} />
      </div>
    );
  }
}

PageContent.propTypes = ShapePageContent;
