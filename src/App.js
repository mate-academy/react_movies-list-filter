import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MovieSearch } from './components/MovieSearch/MovieSearch';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      query: value,
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(value.toLowerCase())
        || movie.description.toLowerCase().includes(value.toLowerCase())
      )),
    });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies} />
        </div>
        <MovieSearch query={query} handleChange={this.handleChange} />
      </div>
    );
  }
}
