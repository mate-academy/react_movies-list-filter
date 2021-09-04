import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchBox } from './components/SearchBox';

type State = {
  movies: Movie[];
  visibleMovies: Movie[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
    visibleMovies: moviesFromServer,
  };

  handleMoviesChange = (newMovies: Movie[]) => {
    this.setState({ visibleMovies: newMovies });
  };

  render() {
    const { movies, visibleMovies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchBox
            movies={movies}
            handleMoviesChange={this.handleMoviesChange}
          />
          <MoviesList movies={visibleMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
