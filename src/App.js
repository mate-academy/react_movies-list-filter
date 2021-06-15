import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Search } from './components/Search';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  saveInputValue = value => this.setState({ query: value });

  render() {
    const { query } = this.state;

    const filterMovies = moviesFromServer.filter(moviesSearch);

    function moviesSearch({ title, description }) {
      return title.toLowerCase().includes(query.toLowerCase())
        || description.toLowerCase().includes(query.toLowerCase())
        || query === '';
    }

    return (
      <div className="page">
        <div className="page-content">
          <Search saveInputValue={this.saveInputValue} />
          <MoviesList movies={filterMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
