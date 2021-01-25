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
      query: query.toLowerCase(),
    });
  }

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer
      .filter(({ title, description }) => (
        title.toLowerCase().includes(query)
          || description.toLowerCase().includes(query)
      ));

    return (
      <div className="page">
        <div className="page-content">
          <MovieFilter
            query={query}
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
