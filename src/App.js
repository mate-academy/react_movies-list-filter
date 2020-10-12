import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchField } from './components/SearchField';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
    movies: moviesFromServer,
  };

  filtering = (event) => {
    this.setState({
      query: event.target.value,
      movies: moviesFromServer.filter(movie => (
        movie.title.toLowerCase()
          .includes(event.target.value.toLowerCase())
          || movie.description.toLowerCase()
            .includes(event.target.value.toLowerCase())
      )),
    });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <SearchField
            query={query}
            filtering={this.filtering}
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
