import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Search } from './components/Search';

export class App extends Component {
  state = {
    query: '',
  };

  updateQuery = (value) => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;
    const moviesToShow = moviesFromServer.filter(movie => (
      movie.title.toLowerCase()
        .includes(query.toLowerCase())
      || movie.description.toLowerCase()
        .includes(query.toLowerCase())
    ));

    return (
      <div className="page">
        <div className="page-content">
          <Search updateQuery={this.updateQuery} />
          <MoviesList movies={moviesToShow} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
