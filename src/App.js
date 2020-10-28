import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
    query: '',
  };

  filterMovies = value => moviesFromServer.filter(
    movie => (value !== ''
      ? (movie.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        || (movie.description.toLowerCase().indexOf(value.toLowerCase()) !== -1)
      : movie),
  );

  handleSearch = (event) => {
    this.setState({
      query: event.target.value,
      movies: this.filterMovies(event.target.value),
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchMovie
              query={this.state.query}
              handleSearch={this.handleSearch}
            />
          </div>

          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
