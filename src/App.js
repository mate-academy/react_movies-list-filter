import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ query: value });
  }

  filterMovies = (movies) => {
    const { query } = this.state;

    return movies.filter(({ title, description }) => (
      title.toLowerCase().includes(query.toLowerCase())
        || description.toLowerCase().includes(query.toLowerCase())
    ));
  }

  render() {
    const filtredMovies = this.filterMovies(moviesFromServer);

    return (
      <div className="page">
        <div className="page-content">
          <SearchBar
            clickHandler={this.handleChange}
            value={this.state.query}
          />
          <MoviesList movies={filtredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
