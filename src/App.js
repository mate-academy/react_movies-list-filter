import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { MovieFilter } from './components/MovieFilter';
import './App.scss';

export class App extends Component {
  state = {
    query: '',
  }

  queryChangeHandler = (query) => {
    this.setState({
      query,
    });
  }

  render() {
    const { query } = this.state;

    const queryLowerCase = query.toLowerCase();
    const filteredMovies = moviesFromServer
      .filter(({ title, description }) => (
        title.toLowerCase().includes(queryLowerCase)
          || description.toLowerCase().includes(queryLowerCase)
      ));

    return (
      <div className="page">
        <div className="page-content">
          <MovieFilter
            onChange={this.queryChangeHandler}
          />
          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
