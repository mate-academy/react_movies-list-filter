import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string,
}

interface State {
  searchedMovies: Movie[]
}

export class MoviesList extends React.Component<Props, {}> {
  state: State = {
    searchedMovies: this.props.movies,
  };

  visibleMovies = () => {
    const { query } = this.props;

    const visibleMovies = [...this.state.searchedMovies].filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase().trimRight())
      || movie.description.toLowerCase().includes(query.toLowerCase().trimRight())
    ));

    return visibleMovies;
  };

  render() {
    const visibleMovies = this.visibleMovies();

    return (
      <div className="movies">
        {visibleMovies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    );
  }
}
