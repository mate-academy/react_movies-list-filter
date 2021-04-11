import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
  }

  handleChange = (value) => {
    const movie = value.trim().toLowerCase();

    this.setState({
      movies: (movie.length > 0)
        ? moviesFromServer.filter(film => (
          film.title + film.description).toLowerCase().includes(movie))
        : moviesFromServer,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie handleChange={this.handleChange} />
          <MoviesList movies={this.state.movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
