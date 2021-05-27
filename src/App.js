import React, { PureComponent } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

export class App extends PureComponent {
  state = {
    movies: moviesFromServer,
  }

  filterMovies = newList => (
    this.setState({ movies: [...newList] })
  )

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchForm
            list={moviesFromServer}
            filterList={this.filterMovies}
          />
          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
