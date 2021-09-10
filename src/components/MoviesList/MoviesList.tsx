import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

interface State {
  querySearch: Movie[]
}

export class MoviesList extends React.Component<Props, State> {
  state = {
    querySearch: this.props.movies,
  };

  getVisibleMovies = () => {
    const { query } = this.props;

    const visibleMovies = [...this.state.querySearch];

    const lowerQuery = query.toLowerCase();

    return visibleMovies.filter(movie => movie.title.toLowerCase().includes(lowerQuery)
    || movie.description.toLowerCase().includes(lowerQuery));
  };

  render() {
    const visibleMovies = this.getVisibleMovies();

    return (
      <div className="movies">
        {visibleMovies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    );
  }
}
