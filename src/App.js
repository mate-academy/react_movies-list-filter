import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchForm } from './components/SerchForm/SearchForm';

export class App extends Component {
  state = {
    movies: moviesFromServer,
    query: '',
  };

  handlerSearch = (query) => {
    this.state.query = query;
    this.changeListMovies();
  }

  changeListMovies = () => {
    const pattern = new RegExp(this.state.query, 'gi');

    this.setState({
      movies: moviesFromServer.filter(
        movie => (movie.title.search(pattern) >= 0
        || movie.description.search(pattern) >= 0
        ),
      ),
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchForm onSearch={this.handlerSearch} />
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
