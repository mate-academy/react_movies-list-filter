import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { MovieFilter } from './components/MovieFilter';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
      movies: moviesFromServer.filter(
        movie 
        => (movie.title + movie.description)
        .toLowerCase()
        .includes(value.toLowerCase()),
      ),
    });
  }

  render() {
    const { query, movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MovieFilter
            query={query}
            handleChange={this.handleChange}
          />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
