import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchMovie } from './components/SearchMovie/SearchMovie';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    movies: [...moviesFromServer],
  };

  handleChange = (value) => {
    this.setState({
      movies: (value.length > 0)
        ? moviesFromServer
          .filter(film => film.title.toLowerCase()
            .includes(value.toLowerCase())
            || film.description.toLocaleLowerCase()
              .includes(value.toLowerCase()))
        : moviesFromServer,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchMovie handleChange={this.handleChange} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
