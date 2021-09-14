import React from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';
import { MoviesList } from './components/MoviesList';

type State = {
  movies: Movie[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    movies: moviesFromServer,
  };

  filterMovies = (query: string) => {
    const lowerQuery = query.toLowerCase();

    this.setState({
      movies: [...moviesFromServer]
        .filter(movie => movie.title.toLowerCase().includes(lowerQuery)
      || movie.description.toLowerCase().includes(lowerQuery)),
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <Search onFilter={this.filterMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>

        <MoviesList movies={movies} />
      </div>
    );
  }
}
