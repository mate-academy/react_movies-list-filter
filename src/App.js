import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MovieFilter } from './components/MovieFilter';
import './App.scss';

export class App extends Component {
  state = {
    movies: moviesFromServer,
  }

  queryChangeHandler = (query) => {
    const queryLowerCase = query.toLowerCase();

    this.setState({
      movies: moviesFromServer.filter(({ title, description }) => (
        title.toLowerCase().includes(queryLowerCase)
          || description.toLowerCase().includes(queryLowerCase)
      )),
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="page">
        <div className="page-content">
          <MovieFilter
            onChange={this.queryChangeHandler}
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
