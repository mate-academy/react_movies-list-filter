import React, { Component } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';

export class App extends Component {
  state = {
    enteredText: '',
    movies: moviesFromServer,
  };

  filterByQuery = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase().includes(value.toLowerCase())
          || movie.description.toLowerCase().includes(value.toLowerCase())
      )),
    });
  };

  render() {
    const { movies, enteredText } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <SearchBar
              filterByQuery={this.filterByQuery}
              enteredText={enteredText}
            />
          </div>
          <MoviesList movies={movies} moviesFromServer={moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
