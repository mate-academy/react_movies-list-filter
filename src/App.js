import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { SearchField } from './components/SearchField';

export class App extends Component {
  state = {
    query: '',
  };

  handleFilterChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    const { query } = this.state;

    const filteredMovies = moviesFromServer
      .filter(movie => (
        query
          ? movie.title.toLowerCase().includes(query.toLowerCase())
          || movie.description.toLowerCase().includes(query.toLowerCase())
          : true
      ));

    return (
      <div className="page">
        <div className="page-content">
          <SearchField
            query={query}
            handleFilterChange={this.handleFilterChange}
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
